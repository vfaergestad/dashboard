FROM registry.suse.com/bci/bci-base:15.5

ARG http_proxy
ARG https_proxy
ARG no_proxy

ENV http_proxy=$http_proxy
ENV https_proxy=$https_proxy
ENV no_proxy=$no_proxy

ARG NO_SSL_VERIFY=false
# If NO_SSL_VERIFY is true, then modify the baseurl line to disable SSL verification
RUN if [ "${NO_SSL_VERIFY}" = "true" ]; then \
    sed -i 's|\(baseurl=https://updates.suse.com/SUSE/Products/SLE-BCI/.*product/\)$|\1?ssl_verify=no|' /etc/zypp/repos.d/SLE_BCI.repo; \
fi

RUN zypper -n install nginx jq

COPY package/nginx.conf /etc/nginx/nginx.conf

# Copy in plugin files and generate files.txt statically
COPY plugin /home/plugin-server/plugin-contents/plugin
COPY plugin/index.yaml /home/plugin-server/plugin-contents

RUN echo 'pluginserver:x:1000:1000::/home/pluginserver:/bin/bash' >> /etc/passwd && \
    echo 'pluginserver:x:1000:' >> /etc/group && \
    mkdir -p /home/plugin-server && \
    mkdir -p /home/plugin-server/plugin-contents && \
    chown -R pluginserver:pluginserver /etc/nginx/nginx.conf && \
    chown -R pluginserver:pluginserver /home/plugin-server && \
    chown -R pluginserver:pluginserver /var/lib/nginx && \
    chown -R pluginserver:pluginserver /var/log/nginx && \
    touch /run/nginx.pid && \
    chown pluginserver:pluginserver /run/nginx.pid
USER pluginserver

WORKDIR /home/plugin-server/plugin-contents

RUN find plugin -type f | sort > files.txt

ENTRYPOINT ["nginx", "-g", "daemon off;"]
