<template>
    <div class="wrapper">
    <div class="container block">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="page-title text-center">
            <h2>Application Startup Form</h2>
          </div>
          <div class="form-inside">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="title">The name of your startup</label>
                <input type="text" class="form-control" name="title" id="title" v-model="form.title">
              </div>
              <div class="form-group">
                <label for="sel1">Startup types</label>
                <select class="form-control form-control-lg" id="sel1" name="categories">
                  <option value="0">Choose StartUp type</option>
                  <option value="1">Lifestyle Startups</option>
                  <option value="2">Small Business Startups</option>
                  <option value="3">Scalable Startups</option>
                  <option value="4">Buyable Startups</option>
                  <option value="5">Large Company Startups</option>
                  <option value="6">Social Startups</option>
                </select>
              </div>
              <div class="form-group">
                <label for="time">How long have you been working on the product</label>
                <input type="text" class="form-control" name="time" id="time" v-model="form.how_long">
              </div>
              <div class="form-group">
                <label for="comment">Startup Description</label>
                <textarea class="form-control" rows="10" id="comment" name="body" v-model="form.description"></textarea>
              </div>

              <div id="file-upload-form" action="POST">
                <label for="upload">You can upload your project files (video, pictures, etc) here</label>
                <input id="file-upload" type="file" name="fileUpload" @change="onInputChange($event)">
                <label for="file-upload" id="file-drag">
                  Select a file to upload OR Drag a file into this box

                  <br /><span id="file-upload-btn" class="button">Add a file</span>
                </label>

                <output for="file-upload" id="messages"></output>
              </div>
              

              <button type="submit" class="send btn btn-lg float-right" >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data:()=>({
    form:{
      title:'',
      description:'',
      how_long: null
    },
      file: ''
  }),

  methods:{
   async submitForm(){
     let formData = new FormData()
      for(let item in this.form ){
        if(this.form.hasOwnProperty(item)){
          formData.append(item,this.form[item])
        }
     }

     formData.append('file',this.file)
     try{
       let res = await this.$store.dispatch('post', {url:'/api/startups/create', data:formData})
       alert(JSON.stringify(res))
       this.$router.push('/dashboard')
     }
     catch(e){
       console.log(e)
       alert(e)
     }
   },
    onInputChange(e){
      if(e.target.files && e.target.files[0]){
        this.file = e.target.files[0]

      }
      
    }
  }
 
}
</script>

<style>

</style>
