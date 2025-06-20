export const tableColumns = [
  {
    title: 'Workflow Id',
    dataIndex: 'workflowId',
    key: 'workflowId',
    width: 140,
  },
  {
    title: 'Creation Date',
    dataIndex: 'creationDate',
    key: 'creationDate',
    width: 140,
  },
  {
    title: 'Cedant Name',
    dataIndex: 'cedantName',
    key: 'cedantName',
    width: 120,
  },
  {
    title: 'Contract Id',
    dataIndex: 'contractId',
    key: 'contractId',
    width: 100,
  },
  {
    title: 'Contract Currency',
    dataIndex: 'contractCurrency',
    key: 'contractCurrency',
    width: 130,
  },
  {
    title: 'Contract Section',
    dataIndex: 'contractSection',
    key: 'contractSection',
    width: 120,
  },
  {
    title: 'Period Start',
    dataIndex: 'periodStart',
    key: 'periodStart',
    width: 120,
  },
  {
    title: 'Adjustment Number',
    dataIndex: 'adjustmentNumber',
    key: 'adjustmentNumber',
    width: 130,
  },
  {
    title: 'Adjustment Currency',
    dataIndex: 'adjustmentCurrency',
    key: 'adjustmentCurrency',
    width: 140,
  },
  {
    title: 'Adjusted Suppl',
    dataIndex: 'adjustedSuppl',
    key: 'adjustedSuppl',
    width: 120,
    render: (value) => (typeof value === 'number' ? value.toFixed(2) : '-')
  },
  {
    title: 'Adjusted Premium',
    dataIndex: 'adjustedPremium',
    key: 'adjustedPremium',
    width: 130,
    render: (value) => (typeof value === 'number' ? value.toFixed(2) : '-')
  },
  {
    title: 'Adjustment Premium',
    dataIndex: 'adjustmentPremium',
    key: 'adjustmentPremium',
    width: 140,
    render: (value) => (typeof value === 'number' ? value.toFixed(2) : '-')
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 100,
  },
  {
    title: 'Error',
    dataIndex: 'error',
    key: 'error',
    width: 100,
  },
  {
    title: 'Sics Result',
    dataIndex: 'sicsResult',
    key: 'sicsResult',
    width: 100,
  }
];
