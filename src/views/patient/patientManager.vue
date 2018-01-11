<template>
    <div class="patientlist" >
      <el-table class="table"
      :data="tableData"
      :border="true"
      size="small"
      >
        <el-table-column
          label="姓名"
          width="180"
        >
        <template slot-scope="scope">
           <el-input v-if="isModify" v-model="scope.row.name"></el-input>
           <template v-else>  {{scope.row.name}}</template>
         
        </template>
        
        </el-table-column>
        <el-table-column
          label="身份证号"
          prop="idNumber"
          width="200"
        ></el-table-column>
        <el-table-column
          label="性别"
          prop="sex"
          width="80"
        ></el-table-column>
        <el-table-column
          label="年龄"
          prop="age"
          width="80"
        ></el-table-column>
        <el-table-column
          label="创建时间"
          prop="date"
          width="200"
        ></el-table-column>
        <el-table-column
          label="操作"

          width="200"
        >
         <template slot-scope="scope">
          <template v-if="!isModify">
             <el-button
             size="mini"
          @click="handleEdit"
           >编辑</el-button>
           <el-button
             type="danger"
             size="mini"
           >删除</el-button>
          </template>
           <template v-else="isModify">
             <el-button
             size="mini"
             @click="handleCancelEdit"
           >取消</el-button>
           <el-button
             type="danger"
             size="mini"
             @click="handleEnsureEdit(scope.$index,scope.row)"
           >确定</el-button>
          </template>
         </template>
        </el-table-column>
      </el-table>
      <div class="pages">
        <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
      </div>
    </div>
</template>

<script>
import {deepCopy} from '@/utils/tool'
    export default {
      data(){
        return {
          listData:[
            {
              name:'左晓飞',
              idNumber:'4104412487124578212584',
              sex:'男',
              age:28,
              date:'2018-01-03 10:33:26'
            },
             {
              name:'左晓飞',
              idNumber:'4104412487124578212584',
              sex:'男',
              age:28,
              date:'2018-01-03 10:33:26'
            }
          ],
          isModify:false
        }
      },
      computed:{
        tableData:{
         get(){
           return deepCopy(this.listData)
         },
         set(value){
           this.listData=value
         }
        }
      },
      methods:{
        handleEdit(){
          this.isModify=true
        },
        handleEnsureEdit(index){
          this.isModify=false
          this.$set(this.listData,index,deepCopy(this.tableData[index]))
        },
         handleCancelEdit(index){
          this.isModify=false
          this.$set(this.tableData,index,deepCopy(this.listData))
        },
      }
    }
</script>

<style lang="scss" scoped>
  .table{
    display:inline-block;
    width:auto;
    /deep/ th{
      .cell{
        font-size:20px;
        font-weight:bold;
      }

    }
  }
  .pages{
    display:flex;
    justify-content:center;
  }
</style>
