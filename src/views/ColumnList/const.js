export const initData = {
  formFilds: [{
    name: 'title',
    label: '标题',
    placeholder: '请输入...',
    options: [],
    fildType: 'input',
  },{
    name: 'author',
    label: '作者',
    placeholder: '请输入...',
    options: [],
    fildType: 'input',
  },{
    name: 'date',
    label: '日期',
    placeholder: '请输入...',
    options: [],
    fildType: 'input',
    }],
  columns: [
    { title: '排序', width: 30, dataIndex: 'sort', key: 'sort', fixed: 'left' },
    { title: '标题', width: 100, dataIndex: 'title', key: 'title', fixed: 'left', align: 'center' },
    { title: '描述', dataIndex: 'desc', key: '1', width: 150 },
    { title: '启用状态', dataIndex: 'status', key: '2', width: 150 },
    { title: '创建日期', dataIndex: 'date', key: '3', width: 150 },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 120,
      align: 'center'
    },],
  dataSource: [],
  pagination: {
    total: 100,
    pageSize: 10,
    current: 1,
  },
}

let data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  initData.dataSource = data
  
