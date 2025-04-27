# Table 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

### 基础用法

基础的表格展示用法。

当 el-table 元素中注入 data 对象数组后，在 el-table-column 中用 prop 属性来对应对象中的键名即可填入数据，用 label 属性来定义表格的列名。 可以使用 width 属性来定义列宽。

<preview path="../examples/table/index.vue" ></preview>

### 包含全选、序号、操作列

包含全选、序号、操作列的表格。

通过设置 type 属性为 selection 来显示多选框，设置 type 属性为 index 来显示序号，设置 type 属性为 expand 来显示展开图标。
通过设置 fixed 属性为 left 或 right 来固定列。
通过设置 sortable 属性实现排序，通过 sortingFn 自定义排序规则。

<preview path="../examples/table/index2.vue" ></preview>
