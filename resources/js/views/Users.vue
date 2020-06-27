<template>
    <div>
        <div class="card mb-4">
            <div class="card-header"><i class="fas fa-table mr-1"></i>DataTable Example
               <button type="button" class="btn btn-primary float-right" v-on:click="showUserModal">
                    Add User
                </button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Access</th>
                            </tr>
                        </thead>
                    <tbody>

                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        <b-modal ref="createUserModal" hide-footer >
    
                <form v-on:submit.prevent="createUser">
                        <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="userData.name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label> 
                        <div class="col-sm-10">
                        <input type="email" class="form-control" v-model="userData.email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Access</label>
                        <div class="col-sm-10">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" v-model="userData.permission" id="inlineCheckbox1" value="option1">
                                <label class="form-check-label" for="inlineCheckbox1">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" v-model="userData.permission" id="inlineCheckbox2" value="option2">
                                <label class="form-check-label" for="inlineCheckbox2">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" v-model="userData.permission" id="inlineCheckbox3" value="option3">
                                <label class="form-check-label" for="inlineCheckbox3">3 </label>
                            </div>
                        </div>
                    </div>
                    <div class="text-right">
                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </div>
                </form>

        </b-modal>
    </div>
</template>

<script>
import * as userService from '../services/user_service';

    export default {
        name: 'user',
        data(){
            return{
                userData:{
                    name:'',
                    email:'',
                    permission:''
                }
            }
        },
        methods:{
            showUserModal(){
                this.$refs['createUserModal'].show()
            },
            hideUserModal(){
                this.$refs['createUserModal'].hide()
            },
            createUser: async function(){
                let formData = new FormData();
                    formData.append('name', this.userData.name);
                    formData.append('email', this.userData.email);
                    //permission must be an array
                    formData.append('permission', this.userData.permission);

                try{
                    const response = await userService.createUser(formData);
                    console.log(response);
                }catch(error){
                    console.log(error)   
                }
                
            }
        }
    }
</script>

<style lang="scss" scoped>
   
</style>