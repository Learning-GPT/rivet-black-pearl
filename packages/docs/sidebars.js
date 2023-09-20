// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  userGuide: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: ['getting-started/installation', 'getting-started/setup', 'getting-started/first-ai-agent'],
    },
    {
      type: 'category',
      label: 'Working with Rivet',
      collapsible: true,
      collapsed: false,
      items: [
        'user-guide/overview-of-interface',
        'user-guide/adding-connecting-nodes',
        'user-guide/working-with-graphs',
        'user-guide/working-with-projects',
        'user-guide/executing-ai-chains',
        'user-guide/splitting',
        'user-guide/subgraphs',
        'user-guide/executors',
        'user-guide/recordings',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsible: true,
      collapsed: false,
      items: [
        'user-guide/features/prompt-designer',
        'user-guide/features/trivet-tests',
        'user-guide/features/chat-viewer',
        'user-guide/features/data-studio',
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsible: true,
      collapsed: false,
      items: ['user-guide/plugins', 'user-guide/plugins/creating-plugins'],
    },
    {
      type: 'category',
      label: 'Built-In Plugins',
      collapsible: true,
      collapsed: false,
      items: [
        'user-guide/plugins/built-in/all',
        'user-guide/plugins/built-in/anthropic',
        'user-guide/plugins/built-in/assemblyai',
        'user-guide/plugins/built-in/autoevals',
        'user-guide/plugins/built-in/gentrace',
      ],
    },
    {
      type: 'category',
      label: 'Debugging',
      collapsible: true,
      collapsed: false,
      items: ['user-guide/live-debugging', 'user-guide/remote-debugging'],
    },
    {
      type: 'category',
      label: 'Testing',
      collapsible: true,
      collapsed: false,
      items: [
        'trivet',
        'user-guide/trivet-getting-started',
        'user-guide/trivet-validation-graphs',
        'user-guide/trivet-tutorial',
        'user-guide/trivet-library',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: true,
      collapsed: false,
      items: ['user-guide/data-types', 'user-guide/control-flow', 'user-guide/loops'],
    },
  ],
  tutorial: [
    'tutorial',
    'tutorial/installing-getting-started',
    'tutorial/simple-graph',
    'tutorial/interpolation-more-node-types',
    'tutorial/matching-conditionals',
    'tutorial/yaml',
    'tutorial/subgraphs',
    'tutorial/splitting',
    'tutorial/loops',
  ],
  apiReference: [
    'api-reference',
    'api-reference/getting-started-integration',
    'api-reference/remote-debugging',
    {
      type: 'category',
      label: '@rivet/node',
      collapsible: true,
      collapsed: false,
      items: [
        'api-reference/node/overview',
        'api-reference/node/createProcessor',
        'api-reference/node/loadProjectFromFile',
        'api-reference/node/loadProjectFromString',
        'api-reference/node/runGraph',
        'api-reference/node/runGraphInFile',
        'api-reference/node/startDebuggerServer',
        {
          type: 'category',
          label: 'Types',
          collapsible: true,
          collapsed: false,
          items: [
            'api-reference/node/DebuggerEvents',
            'api-reference/node/LooseDataValue',
            'api-reference/node/RivetDebuggerServer',
            'api-reference/node/RunGraphOptions',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '@rivet/core',
      collapsible: true,
      collapsed: false,
      items: [
        'api-reference/core/overview',
        'api-reference/core/DataValue',
        'api-reference/core/GraphProcessor',
        {
          type: 'category',
          label: 'Types',
          collapsible: true,
          collapsed: false,
          items: [
            'api-reference/core/DataValue',
            'api-reference/core/NodeGraph',
            'api-reference/core/Project',
            'api-reference/core/Settings',
          ],
        },
      ],
    },
  ],
  nodeReference: [
    'node-reference',
    'node-reference/all-nodes',
    {
      type: 'category',
      label: 'Text',
      collapsible: true,
      collapsed: false,
      items: [
        'node-reference/text',
        'node-reference/prompt',
        'node-reference/chunk',
        'node-reference/to-yaml',
        'node-reference/to-json',
        'node-reference/join',
      ],
    },
    {
      type: 'category',
      label: 'AI',
      collapsible: true,
      collapsed: false,
      items: [
        'node-reference/chat',
        'node-reference/assemble-prompt',
        'node-reference/trim-chat-messages',
        'node-reference/gpt-function',
        'node-reference/get-embedding',
      ],
    },
    {
      type: 'category',
      label: 'Data',
      collapsible: true,
      collapsed: false,
      items: [
        'node-reference/extract-with-regex',
        'node-reference/extract-json',
        'node-reference/extract-yaml',
        'node-reference/extract-object-path',
        'node-reference/array',
        'node-reference/pop',
        'node-reference/hash',
      ],
    },
    {
      type: 'category',
      label: 'Logic',
      collapsible: true,
      collapsed: false,
      items: [
        'node-reference/match',
        'node-reference/if',
        'node-reference/if-else',
        'node-reference/loop-controller',
        'node-reference/coalesce',
        'node-reference/passthrough',
      ],
    },
    {
      type: 'category',
      label: 'Input/Output',
      collapsible: true,
      collapsed: false,
      items: [
        'node-reference/graph-output',
        'node-reference/graph-input',
        'node-reference/user-input',
        'node-reference/read-directory',
        'node-reference/read-file',
        'node-reference/vector-store',
        'node-reference/vector-knn',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: true,
      collapsed: false,
      items: [
        'node-reference/subgraph',
        'node-reference/external-call',
        'node-reference/raise-event',
        'node-reference/wait-for-event',
        'node-reference/code',
        'node-reference/context',
        'node-reference/get-global',
        'node-reference/set-global',
        'node-reference/race-inputs',
      ],
    },
  ],
};

module.exports = sidebars;
