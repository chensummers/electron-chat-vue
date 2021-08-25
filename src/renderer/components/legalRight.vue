<template>
  <div>
    <div class="title">家庭医生服务权益GroupId:8546686325</div>
    <a-table :columns="columns" :data-source="data" bordered>

     <span slot="sort" slot-scope="record,text,index"> 
        {{text.name?index+1:""}}
     </span>
     <span slot="action1" slot-scope="record,text"> 
        <span v-if="text.name">{{text.action1}}</span>
        <a-button v-else type="primary">去使用</a-button>
     </span>
     
     
    </a-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "序号",
          dataIndex: "sort",
          key: "sort",
          scopedSlots: { customRender: "sort" },
        },
        {
          title: "ID",
          dataIndex: "age",
          key: "age",
          scopedSlots: { customRender: 'age' },
        },
        {
          title: "名称",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "类型",
          key: "tags",
          dataIndex: "tags",
          scopedSlots: { customRender: "tags" },
        },
        {
          title: "数量",
          key: "number",
           dataIndex:"number"
        },
        {
          title: "余额",
          key: "action",
          dataIndex:"action"
        },
        {
          title: "总价值",
          key: "action1",
           dataIndex:"action1",
              scopedSlots: { customRender: "action1" },
        },
        {
          title: "剩余价值",
          key: "action2",
           dataIndex:"action2"
        },
        {
          title: "有效期",
          key: "action3",
           dataIndex:"action3"
        },
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          number: 18,
          address: 88,
          tags: 1,
          action:"1",
          action1:"1",
          action2:"1",
          action3:"1",
          sort:5
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "99",
          number: 18,
          tags: 1,
           action:"1",
          action1:"1",
          action2:"1",
          action3:"1",
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: 108,
          number: 18,
          tags: 1,
           action:"1",
          action1:"1",
          action2:"1",
          action3:"1",
        },
        {
          key: "4",
          name: "",
          age: '',
          address: '',
          number: 18,
          tags: 1,
          action1:"",
          action2:"1",
          action3:"1",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  height: 40px;
  line-height: 40px;
  border: 1px solid #dddddd;
  margin-bottom: 20px;
}
</style>
