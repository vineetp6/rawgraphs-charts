export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 100,
    group: 'artboard',
  },

  marginRight: {
    type: 'number',
    label: 'Margin (right)',
    default: 50,
    group: 'artboard',
  },

  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 50,
    group: 'artboard',
  },

  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 100,
    group: 'artboard',
  },
  showLegend: {
    type: 'boolean',
    label: 'Show legend',
    default: false,
    group: 'artboard',
  },

  legendWidth: {
    type: 'number',
    label: 'Legend width',
    default: 200,
    group: 'artboard',
    disabled: {
      showLegend: false,
    },
    container: 'width',
    containerCondition: {
      showLegend: true,
    },
  },

  rounding: {
    type: 'number',
    label: 'Rounding radius',
    default: 0,
    min: 0,
    max: 100,
    step: 1,
    group: 'chart',
  },

  padding: {
    type: 'number',
    label: 'Space between rows and lines',
    default: 2,
    group: 'chart',
  },

  sortXAxisBy: {
    type: 'text',
    label: 'Sort X axis by',
    group: 'chart',
    options: [
      'Total value (descending)',
      'Total value (ascending)',
      'Name',
      'Original',
    ],
    default: 'Original',
  },

  sortYAxisBy: {
    type: 'text',
    label: 'Sort Y axis by',
    group: 'chart',
    options: [
      'Total value (descending)',
      'Total value (ascending)',
      'Name',
      'Original',
    ],
    default: 'Original',
  },

  showGrid: {
    type: 'boolean',
    label: 'Show grid',
    default: false,
    group: 'chart',
  },

  labelStyles: {
    type: 'text',
    label: 'Label',
    group: 'labels',
    options: ['Primary', 'Secondary', 'Tertiary'],
    default: 'Primary',
    repeatFor: 'label'
  },

  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'interpolateSpectral',
    },
    group: 'colors',
  },

}
