<template>
    <div class="wrapper">
    <div class="container block">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="page-title text-center">
            <h2>Application Startup Form</h2>
          </div>
          <div class="form-inside">
            <form>
              <div class="form-group">
                <label for="title">The name of your startup</label>
                <input type="text" class="form-control" name="title" id="title">
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
                <input type="text" class="form-control" name="time" id="time">
              </div>
              <div class="form-group">
                <label for="comment">Startup Description</label>
                <textarea class="form-control" rows="10" id="comment" name="body"></textarea>
              </div>

              <form id="file-upload-form" action="POST">
                <label for="upload">You can upload your project files (video, pictures, etc) here</label>
                <input id="file-upload" type="file" name="fileUpload" />
                <label for="file-upload" id="file-drag">
                  Select a file to upload OR Drag a file into this box

                  <br /><span id="file-upload-btn" class="button">Add a file</span>
                </label>

                <output for="file-upload" id="messages"></output>
              </form>

              <button type="submit" class="send btn btn-lg float-right">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="">
    
</style>