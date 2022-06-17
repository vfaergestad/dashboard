<script>
import Jexl from 'jexl';
import Tab from '@shell/components/Tabbed/Tab';
import { get, set } from '@shell/utils/object';
import { _EDIT } from '@shell/config/query-params';
import Question from '@shell/components/Questions/Question';

export default {
  components: {
    Question,
    Tab,
  },

  props: {
    mode: {
      type:    String,
      default: _EDIT,
    },

    // value: {
    //   type:     Object,
    //   required: true,
    // },

    tabbed: {
      type:    [Boolean, String],
      default: true,
    },

    // Can be a chartVersion, resource Schema, or an Array of question objects
    source: {
      type:     [Object, Array],
      required: true,
    },

    targetNamespace: {
      type:     String,
      required: true
    },

    ignoreVariables: {
      type:    Array,
      default: () => [],
    },

    disabled: {
      type:    Boolean,
      default: false,
    },

    inStore: {
      type:    String,
      default: 'cluster'
    },

    emit: {
      type:    Boolean,
      default: false,
    }
  },

  data() {
    return {
      valueGeneration: 0,

      // mock the values.yaml
      value: {
        admissionwebhook: { type: 'ClusterIP' },
        bottlerocket:     {
          enabled:     false,
          runtimePath: '/run/dockershim.sock'
        },
        containerd: {
          enabled: false,
          path:    '/var/run/containerd/containerd.sock'
        },
        controller: {
          apisvc: {
            annotations: {},
            route:       {
              enabled:     false,
              host:        null,
              termination: 'passthrough'
            },
            type: null
          },
          azureFileShare: {
            enabled:    false,
            secretName: null,
            shareName:  null
          },
          certificate: {
            keyFile: 'tls.key',
            pemFile: 'tls.pem',
            secret:  null
          },
          configmap: {
            data:    null,
            enabled: false
          },
          disruptionbudget: 0,
          enabled:          true,
          env:              [

          ],
          federation: {
            managedsvc: {
              ingress: {
                annotations: { 'ingress.kubernetes.io/protocol': 'https' },
                enabled:     false,
                host:        null,
                path:        '/',
                secretName:  null,
                tls:         false
              },
              route: {
                enabled:     false,
                host:        null,
                termination: 'passthrough'
              },
              type: null
            },
            mastersvc: {
              ingress: {
                annotations: { 'ingress.kubernetes.io/protocol': 'https' },
                enabled:     false,
                host:        null,
                path:        '/',
                secretName:  null,
                tls:         false
              },
              route: {
                enabled:     false,
                host:        null,
                termination: 'passthrough'
              },
              type: null
            }
          },
          image: {
            hash:       null,
            repository: 'rancher/mirrored-neuvector-controller',
            tag:        '5.0.0'
          },
          ingress: {
            annotations: { 'ingress.kubernetes.io/protocol': 'https' },
            enabled:     false,
            host:        null,
            path:        '/',
            secretName:  null,
            tls:         false,
            affinity:    {
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key:      'kubernetes.io/e2e-az-name',
                        operator: 'In',
                        values:   [
                          'e2e-az1',
                          'e2e-az2'
                        ]
                      }
                    ]
                  }
                ]
              }
            },
            //         # nodeAffinity:
            // #   requiredDuringSchedulingIgnoredDuringExecution:
            // #     nodeSelectorTerms:
            // #     - matchExpressions:
            // #       - key: kubernetes.io/e2e-az-name
            // #         operator: In
            // #         values:
            // #         - e2e-az1
            // #         - e2e-az2
          },
          nodeSelector:      {},
          priorityClassName: null,
          grafana:           {
            ini: {
              paths: {
                data:         '/var/lib/grafana/',
                logs:         '/var/log/grafana',
                plugins:      '/var/lib/grafana/plugins',
                provisioning: '/etc/grafana/provisioning'
              },
              analytics:   { check_for_updates: true },
              log:         { mode: 'console' },
              grafana_net: { url: 'https://grafana.net' }
            }
          },
          pvc:               {
            accessModes: [
              'ReadWriteMany'
            ],
            capacity:     null,
            enabled:      false,
            storageClass: null
          },
          ranchersso:    { enabled: true },
          replicas:      3,
          resources:     {},
          schedulerName: null,
          secret:        {
            data:    {},
            enabled: false
          },
          strategy: {
            rollingUpdate: {
              maxSurge:       1,
              maxUnavailable: 0
            },
            type: 'RollingUpdate'
          },
          tolerations: [

          ]
        },
        crdwebhook: {
          enabled: true,
          type:    'ClusterIP'
        },
        crio: {
          enabled: false,
          path:    '/var/run/crio/crio.sock'
        },
        cve: {
          scanner: {
            affinity:   {},
            dockerPath: '',
            enabled:    true,
            image:      {
              hash:       null,
              repository: 'rancher/mirrored-neuvector-scanner',
              tag:        'latest'
            },
            nodeSelector:      {},
            priorityClassName: null,
            replicas:          3,
            resources:         {},
            strategy:          {
              rollingUpdate: {
                maxSurge:       1,
                maxUnavailable: 0
              },
              type: 'RollingUpdate'
            },
            tolerations: [

            ]
          },
          updater: {
            enabled: true,
            image:   {
              hash:        null,
              repository:  'rancher/mirrored-neuvector-updater',
              tag:         'latest',
              tolerations: [
                {
                  effect:   'NoSchedule',
                  key:      'cattle.io/os',
                  operator: 'Equal',
                  value:    'linux'
                }
              ]
            },
            priorityClassName: null,
            schedule:          '0 0 * * *',
            secure:            false
          }
        },
        docker: {
          path:    '/var/run/docker.sock',
          enabled: true
        },
        enforcer: {
          enabled: true,
          image:   {
            hash:       null,
            repository: 'rancher/mirrored-neuvector-enforcer',
            tag:        '5.0.0'
          },
          priorityClassName: null,
          resources:         {},
          tolerations:       [
            {
              effect: 'NoSchedule',
              key:    'node-role.kubernetes.io/master'
            }
          ]
        },
        k3s: {
          enabled:     false,
          runtimePath: '/run/k3s/containerd/containerd.sock'
        },
        manager: {
          affinity:    {},
          certificate: {
            keyFile: 'tls.key',
            pemFile: 'tls.pem',
            secret:  null
          },
          enabled: true,
          env:     { ssl: true },
          image:   {
            hash:       null,
            repository: 'rancher/mirrored-neuvector-manager',
            tag:        '5.0.0'
          },
          ingress: {
            annotations: {},
            enabled:     false,
            host:        null,
            path:        '/',
            secretName:  null,
            tls:         false
          },
          nodeSelector:      {},
          priorityClassName: null,
          resources:         {},
          route:             {
            enabled:     true,
            host:        null,
            termination: 'passthrough'
          },
          svc: {
            annotations:    {},
            loadBalancerIP: null,
            type:           'NodePort'
          },
          tolerations: [

          ]
        },
        oem:            null,
        openshift:      false,
        psp:            false,
        registry:       'docker.io',
        resources:      {},
        serviceAccount: 'neuvector'
      }
    };
  },

  computed: {
    allQuestions() {
      if ( this.source.questions?.questions ) {
        return this.source.questions.questions;
      } else if ( this.source.type === 'schema' && this.source.resourceFields ) {
        return this.schemaToQuestions(this.source.resourceFields);
      } else if ( typeof this.source === 'object' ) {
        return this.schemaToQuestions(this.source);
      } else {
        return [];
      }
    },

    shownQuestions() {
      const values = this.value;
      const vm = this;

      if ( this.valueGeneration < 0 ) {
        // Pointless condition to get this to depend on generation and recompute
        return;
      }

      const out = [];

      for ( const q of this.allQuestions ) {
        if ( this.ignoreVariables.includes(q.variable) ) {
          continue;
        }

        addQuestion(q);
      }

      return out;

      function addQuestion(q, depth = 1, parentGroup) {
        if ( !vm.shouldShow(q, values) ) {
          return;
        }

        q.depth = depth;
        q.group = q.group || parentGroup;

        out.push(q);

        if ( q.subquestions?.length && vm.shouldShowSub(q, values) ) {
          for ( const sub of q.subquestions ) {
            addQuestion(sub, depth + 1, q.group);
          }
        }
      }
    },

    chartName() {
      return this.source.chart?.name;
    },

    groups() {
      // const map = {};
      // const defaultGroup = 'Questions';
      // let weight = this.shownQuestions.length;

      // for ( const q of this.shownQuestions ) {
      //   const group = q.group || defaultGroup;

      //   const normalized = group.trim().toLowerCase();
      //   const name = this.$store.getters['i18n/withFallback'](`charts.${ this.chartName }.group.${ camelCase(group) }`, null, group);

      //   if ( !map[normalized] ) {
      //     map[normalized] = {
      //       name,
      //       questions: [],
      //       weight:    weight--,
      //     };
      //   }

      //   map[normalized].questions.push(q);
      // }

      // const out = Object.values(map);

      // console.log('groups ', out);

      // return sortBy(out, 'weight:desc');

      return [
        {
          name:      'Container Images',
          questions: [
            {
              default:     'docker.io',
              description: 'image registry',
              group:       'Container Images',
              label:       'Image Registry',
              type:        'string',
              variable:    'registry',
              depth:       1
            },
            {
              default:     'neuvector/controller',
              description: 'controller image repository',
              group:       'Container Images',
              label:       'Controller image path',
              type:        'string',
              variable:    'controller.image.repository',
              depth:       1
            },
            {
              default:     '',
              description: 'image tag for controller',
              group:       'Container Images',
              label:       'Controller Image Tag',
              type:        'string',
              variable:    'controller.image.tag',
              depth:       1
            },
            {
              default:     'neuvector/manager',
              description: 'manager image repository',
              group:       'Container Images',
              label:       'Manager image path',
              type:        'string',
              variable:    'manager.image.repository',
              depth:       1
            },
            {
              default:     '',
              description: 'image tag for  manager',
              group:       'Container Images',
              label:       'Manager Image Tag',
              type:        'string',
              variable:    'manager.image.tag',
              depth:       1
            },
            {
              default:     'neuvector/enforcer',
              description: 'enforcer image repository',
              group:       'Container Images',
              label:       'Enforcer image path',
              type:        'string',
              variable:    'enforcer.image.repository',
              depth:       1
            },
            {
              default:     '',
              description: 'image tag for enforcer',
              group:       'Container Images',
              label:       'Enforcer Image Tag',
              type:        'string',
              variable:    'enforcer.image.tag',
              depth:       1
            },
            {
              default:     'neuvector/scanner',
              description: 'scanner image repository',
              group:       'Container Images',
              label:       'Scanner image path',
              type:        'string',
              variable:    'cve.scanner.image.repository',
              depth:       1
            },
            {
              default:     '',
              description: 'image tag for scanner',
              group:       'Container Images',
              label:       'Scanner Image Tag',
              type:        'string',
              variable:    'cve.scanner.image.tag',
              depth:       1
            },
            {
              default:     'neuvector/updater',
              description: 'cve updater image repository',
              group:       'Container Images',
              label:       'CVE Updater image path',
              type:        'string',
              variable:    'cve.updater.image.repository',
              depth:       1
            },
            // {
            //   default:     '',
            //   description: 'image tag for updater',
            //   group:       'Container Images',
            //   label:       'Updater Image Tag',
            //   type:        'string',
            //   variable:    'cve.updater.image.tag',
            //   depth:       1
            // },
            {
              default:     [],
              description: 'Example of form component for adding tolerations',
              group:       'Container Images',
              label:       'Tolerations Example',
              type:        'tolerations',
              variable:    'cve.updater.image.tolerations',
              depth:       1
            },
            {
              description: 'Node affinity example description',
              group:       'Container Images',
              label:       'Node Affinity Example',
              type:        'nodeaffinity',
              variable:    'controller.ingress.affinity',
              depth:       1,
              default:     {}
            }
          ],
          weight: 30
        },
        {
          name:      'Container Runtime',
          questions: [
            {
              default:             true,
              description:         'Docker runtime. Enable only one runtime.',
              group:               'Container Runtime',
              label:               'Docker Runtime',
              show_subquestion_if: true,
              subquestions:        [
                {
                  default:     '/var/run/docker.sock',
                  description: 'Docker Runtime Path',
                  label:       'Runtime Path',
                  type:        'string',
                  variable:    'docker.path',
                  depth:       2,
                  group:       'Container Runtime'
                }
              ],
              type:     'boolean',
              variable: 'docker.enabled',
              depth:    1
            },
            {
              default:     '/var/run/docker.sock',
              description: 'Docker Runtime Path',
              label:       'Runtime Path',
              type:        'string',
              variable:    'docker.path',
              depth:       2,
              group:       'Container Runtime'
            },
            {
              default:             'false',
              description:         'Containerd runtime. Enable only one runtime.',
              group:               'Container Runtime',
              label:               'Containerd Runtime',
              show_subquestion_if: true,
              subquestions:        [
                {
                  default:     ' /var/run/containerd/containerd.sock',
                  description: 'Containerd Runtime Path',
                  label:       'Runtime Path',
                  type:        'string',
                  variable:    'containerd.path'
                }
              ],
              type:     'boolean',
              variable: 'containerd.enabled',
              depth:    1
            },
            {
              default:             'false',
              description:         'CRI-O runtime. Enable only one runtime.',
              group:               'Container Runtime',
              label:               'CRI-O Runtime',
              show_subquestion_if: true,
              subquestions:        [
                {
                  default:     '/var/run/crio/crio.sock',
                  description: 'CRI-O Runtime Path',
                  label:       'Runtime Path',
                  type:        'string',
                  variable:    'crio.path'
                }
              ],
              type:     'boolean',
              variable: 'crio.enabled',
              depth:    1
            },
            {
              default:             'false',
              description:         'k3s containerd runtime. Enable only one runtime.',
              group:               'Container Runtime',
              label:               'k3s Containerd Runtime',
              show_subquestion_if: true,
              subquestions:        [
                {
                  default:     ' /run/k3s/containerd/containerd.sock',
                  description: 'k3s Containerd Runtime Path',
                  label:       'Runtime Path',
                  type:        'string',
                  variable:    'k3s.runtimePath'
                }
              ],
              type:     'boolean',
              variable: 'k3s.enabled',
              depth:    1
            }
          ],
          weight: 29
        },
        {
          name:      'PVC Configuration',
          questions: [
            {
              default:     false,
              description: 'If true, enable persistence for controller using PVC',
              group:       'PVC Configuration',
              label:       'PVC status',
              type:        'boolean',
              variable:    'controller.pvc.enabled',
              depth:       1
            },
            {
              default:     '',
              description: 'Storage Class to be used',
              group:       'PVC Configuration',
              label:       'Storage Class Name',
              type:        'string',
              variable:    'controller.pvc.storageClass',
              depth:       1
            }
          ],
          weight: 28
        },
        {
          name:      'Ingress Configuration',
          questions: [
            {
              default:     false,
              description: 'If true, create ingress, must also set ingress host value',
              group:       'Ingress Configuration',
              label:       'Manager ingress status',
              type:        'boolean',
              variable:    'manager.ingress.enabled',
              depth:       1
            },
            {
              default:     '',
              description: 'Must set this host value if ingress is enabled',
              group:       'Ingress Configuration',
              label:       'Manager Ingress host',
              type:        'string',
              variable:    'manager.ingress.host',
              depth:       1
            },
            {
              default:     {},
              description: 'Set ingress path',
              group:       'Ingress Configuration',
              label:       'Manager Ingress path',
              // type:        'string',
              type:        'nodeselectors',
              variable:    'manager.ingress.affinity',
              depth:       1
            },
            {
              default:     {},
              description: "Add annotations to ingress to influence behavior. Please use the 'Edit as YAML' feature in the Rancher UI to add single or multiple lines of annotation.",
              group:       'Ingress Configuration',
              label:       'Manager Ingress annotations',
              type:        'annotations',
              variable:    'manager.ingress.annotations',
              depth:       1
            },
            {
              default:     false,
              description: 'If true, create ingress for rest api, must also set ingress host value',
              group:       'Ingress Configuration',
              label:       'Controller ingress status',
              type:        'boolean',
              variable:    'controller.ingress.enabled',
              depth:       1
            },
            {
              default:     '',
              description: 'Must set this host value if ingress is enabled',
              group:       'Ingress Configuration',
              label:       'Controller Ingress host',
              type:        'string',
              variable:    'controller.ingress.host',
              depth:       1
            },
            // {
            //   default:     '/',
            //   description: 'Set ingress path',
            //   group:       'Ingress Configuration',
            //   label:       'Controller Ingress path',
            //   type:        'string',
            //   variable:    'controller.ingress.path',
            //   depth:       1
            // },
            {
              default:     {},
              description: 'test ConfigMap',
              group:       'Ingress Configuration',
              label:       'test ConfigMap',
              type:        'configmap',
              variable:    'controller.ingress.path',
              depth:       1
            },
            {
              default:     null,
              description: 'test Secret',
              group:       'Ingress Configuration',
              label:       'test Secret',
              type:        'secret',
              variable:    'controller.ingress.secretName',
              depth:       1
            },
            {
              default:     {},
              description: "Add annotations to ingress to influence behavior. Please use the 'Edit as YAML' feature in the Rancher UI to add single or multiple lines of annotation.",
              group:       'Ingress Configuration',
              label:       'Controller Ingress annotations',
              type:        'annotations',
              variable:    'controller.ingress.annotations',
              depth:       1
            },
            {
              variable:    'controller.pvc.accessModes',
              default:     ['ReadWriteMany', 'ReadOnlyMany', 'ReadWriteOnce'],
              depth:       1,
              description: 'Example description of list of strings',
              group:       'Ingress Configuration',
              label:       'Example Label for List of Strings',
              type:        'listofstrings',
            },
            {
              variable:    'controller.grafana.ini',
              default:     {
                paths: {
                  data:         '/var/lib/grafana/',
                  logs:         '/var/log/grafana',
                  plugins:      '/var/lib/grafana/plugins',
                  provisioning: '/etc/grafana/provisioning'
                },
                analytics:   { check_for_updates: true },
                log:         { mode: 'console' },
                grafana_net: { url: 'https://grafana.net' }
              },
              depth:       1,
              description: 'Example description for upload YAML file',
              group:       'Ingress Configuration',
              label:       'Example Label for Upload YAML File',
              type:        'uploadyamlfile',
            }
          ],
          weight: 27
        },
        {
          name:      'Service Configuration',
          questions: [
            {
              default:     'NodePort',
              description: 'Set manager service type for native Kubernetes',
              group:       'Service Configuration',
              label:       'Manager service type',
              options:     [
                'NodePort',
                'ClusterIP',
                'LoadBalancer'
              ],
              type:     'enum',
              variable: 'manager.svc.type',
              depth:    1
            },
            {
              default:     '',
              description: 'Multi-cluster master cluster service type. If specified, the deployment will be used to manage other clusters. Possible values include NodePort, LoadBalancer and Ingress',
              group:       'Service Configuration',
              label:       'Fed Master Service Type',
              options:     [
                'NodePort',
                'Ingress',
                'LoadBalancer'
              ],
              type:     'enum',
              variable: 'controller.federation.mastersvc.type',
              depth:    1
            },
            {
              default:     '',
              description: 'Multi-cluster managed cluster service type. If specified, the deployment will be managed by the master clsuter. Possible values include NodePort, LoadBalancer and Ingress',
              group:       'Service Configuration',
              label:       'Fed Managed service type',
              options:     [
                'NodePort',
                'Ingress',
                'LoadBalancer'
              ],
              type:     'enum',
              variable: 'controller.federation.managedsvc.type',
              depth:    1
            },
            {
              default:     'NodePort',
              description: 'Controller REST API service type',
              group:       'Service Configuration',
              label:       'Controller REST API Service Type',
              options:     [
                'NodePort',
                'ClusterIP',
                'LoadBalancer'
              ],
              type:     'enum',
              variable: 'controller.apisvc.type',
              depth:    1
            }
          ],
          weight: 26
        }
      ];
    },

    asTabs() {
      if ( this.tabbed === false || this.tabbed === 'never' ) {
        return false;
      }

      if ( this.tabbed === 'multiple' ) {
        return this.groups.length > 1;
      }

      return true;
    },
  },

  watch: {
    value: {
      deep: true,

      handler() {
        this.valueGeneration++;
      },
    }
  },

  methods: {
    get,
    set,

    schemaToQuestions(fields) {
      const keys = Object.keys(fields);
      const out = [];

      for ( const k of keys ) {
        out.push({
          variable: k,
          label:    k,
          ...fields[k],
        });
      }

      return out;
    },

    update(variable, $event) {
      set(this.value, variable, $event);
      if (this.emit) {
        this.$emit('updated');
      }
    },
    evalExpr(expr, values, question, allQuestions) {
      try {
        const out = Jexl.evalSync(expr, values);

        // console.log('Eval', expr, '=> ', out);

        // If the variable contains a hyphen, check if it evaluates to true
        // according to the evaluation logic used in the old UI.
        // This helps users avoid manual work to migrate from legacy apps.
        if (!out && expr.includes('-')) {
          const res = this.evaluate(question, allQuestions);

          return res;
        }

        return out;
      } catch (err) {
        console.error('Error evaluating expression:', expr, values); // eslint-disable-line no-console

        return true;
      }
    },
    evaluate(question, allQuestions) {
      if ( !question.show_if ) {
        return true;
      }
      const and = question.show_if.split('&&');
      const or = question.show_if.split('||');

      let result;

      if ( get(or, 'length') > 1 ) {
        result = or.some(showIf => this.calExpression(showIf, allQuestions));
      } else {
        result = and.every(showIf => this.calExpression(showIf, allQuestions));
      }

      return result;
    },
    calExpression(showIf, allQuestions) {
      if ( showIf.includes('!=')) {
        return this.isNotEqual(showIf, allQuestions);
      } else {
        return this.isEqual(showIf, allQuestions);
      }
    },
    isEqual(showIf, allQuestions) {
      showIf = showIf.trim();
      const variables = this.getVariables(showIf, '=');

      if ( variables ) {
        const left = this.stringifyAnswer(this.getAnswer(variables.left, allQuestions));
        const right = this.stringifyAnswer(variables.right);

        return left === right;
      }

      return false;
    },
    isNotEqual(showIf, allQuestions) {
      showIf = showIf.trim();
      const variables = this.getVariables(showIf, '!=');

      if ( variables ) {
        const left = this.stringifyAnswer(this.getAnswer(variables.left, allQuestions));
        const right = this.stringifyAnswer(variables.right);

        return left !== right;
      }

      return false;
    },
    getVariables(showIf, operator) {
      if ( showIf.includes(operator)) {
        const array = showIf.split(operator);

        if ( array.length === 2 ) {
          return {
            left:  array[0],
            right: array[1]
          };
        } else {
          return null;
        }
      }

      return null;
    },
    getAnswer(variable, questions) {
      const found = questions.find(q => q.variable === variable);

      if ( found ) {
        // Equivalent to finding question.answer in Ember
        return get(this.value, found.variable);
      } else {
        return variable;
      }
    },
    stringifyAnswer(answer) {
      if ( answer === undefined || answer === null ) {
        return '';
      } else if ( typeof answer === 'string' ) {
        return answer;
      } else {
        return `${ answer }`;
      }
    },
    shouldShow(q, values) {
      let expr = q.if;

      if ( expr === undefined && q.show_if !== undefined ) {
        expr = this.migrate(q.show_if);
      }

      if ( expr ) {
        const shown = !!this.evalExpr(expr, values, q, this.allQuestions);

        return shown;
      }

      return true;
    },
    shouldShowSub(q, values) {
      // Sigh, both singular and plural are used in the wild...
      let expr = ( q.subquestions_if === undefined ? q.subquestion_if : q.subquestions_if);
      const old = ( q.show_subquestions_if === undefined ? q.show_subquestion_if : q.show_subquestions_if);

      if ( !expr && old !== undefined ) {
        if ( old === false || old === 'false' ) {
          expr = `!${ q.variable }`;
        } else if ( old === true || old === 'true' ) {
          expr = `!!${ q.variable }`;
        } else {
          expr = `${ q.variable } == "${ old }"`;
        }
      }

      if ( expr ) {
        return this.evalExpr(expr, values, q, this.allQuestions);
      }

      return true;
    },

    migrate(expr) {
      let out;

      if ( expr.includes('||') ) {
        out = expr.split('||').map(x => this.migrate(x)).join(' || ');
      } else if ( expr.includes('&&') ) {
        out = expr.split('&&').map(x => this.migrate(x)).join(' && ');
      } else {
        const parts = expr.match(/^(.*)(!?=)(.*)$/);

        if ( parts ) {
          const key = parts[1].trim();
          const op = parts[2].trim() === '!=' ? '!=' : '==';
          const val = parts[3].trim();

          if ( val === 'true' || val === 'false' || val === 'null' ) {
            out = `${ key } ${ op } ${ val }`;
          } else if ( val === '' ) {
            // Existing charts expect `foo=` with `{foo: null}` to be true.
            if ( op === '!=' ) {
              out = `!!${ key }`;
            } else {
              out = `!${ key }`;
            }
            // out = `${ op === '!' ? '!' : '' }(${ key } == "" || ${ key } == null)`;
          } else {
            out = `${ key } ${ op } "${ val }"`;
          }
        } else {
          try {
            Jexl.compile(expr);

            out = expr;
          } catch (e) {
            console.error('Error migrating expression:', expr); // eslint-disable-line no-console

            out = 'true';
          }
        }
      }

      return out;
    }
  },
};
</script>

<template>
  <form v-if="asTabs">
    <Tab
      v-for="g in groups"
      :key="g.name"
      :name="g.name"
      :label="g.name"
      :weight="g.weight"
    >
      <div v-for="q in g.questions" :key="q.variable" class="row question">
        <div class="col span-12">
          <Question
            :in-store="inStore"
            :question="q"
            :target-namespace="targetNamespace"
            :value="get(value, q.variable)"
            :disabled="disabled"
            :chart-name="chartName"
            @input="update(q.variable, $event)"
          />
        </div>
      </div>
    </Tab>
  </form>
  <form v-else>
    <div
      v-for="g in groups"
      :key="g.name"
    >
      <h3 v-if="groups.length > 1">
        {{ g.label }}
      </h3>
      <div v-for="q in g.questions" :key="q.variable" class="row question">
        <div class="col span-12">
          <Question
            :in-store="inStore"
            :question="q"
            :target-namespace="targetNamespace"
            :value="get(value, q.variable)"
            :disabled="disabled"
            :chart-name="chartName"
            @input="update(q.variable, $event)"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
  .question {
    margin-top: 10px;

    &:first-child {
      margin-top: 0;
    }
  }
</style>
