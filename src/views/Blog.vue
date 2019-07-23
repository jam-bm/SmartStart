<template>
    <div>
        <section>
		<div class="main_container">
			<div class="main_page">
				<!-- Tittle -->
				<div class="row">
					<div class="col-md-12">
						<h1>User Research</h1>
					</div>
				</div>
				<!-- tittle text -->
				<div class="row">
					<div class="col-md">

						<div class="tittle">
							<p>User research is the lifeblood of any product organization, and learning from your
								customers through a thoughtful UX research program is essential for product evolution.
								This user research template is a great way to to keep track of all your research in one
								place, from user outreach, to scheduling usability testing sessions and customer
								interviews, to synthesizing your findings into a research report, to integrating with
								the product development process and suggesting features to address user needs.
								This UX research template is flexible enough to work with any design process or research
								technique, whether quantitative or qualitative in nature. Perhaps you're doing user
								testing or user interviews in a lab, with recording equipment, tree testing, card
								sorting, and ethnographic studies. Or perhaps you're doing usability testing or A/B
								testing in your app directly. With this template, you can centralize your results, and
								easily search, sort, filter and categorize to reveal insights.
							</p>

							<div class="author">
								<p>Author</p>

							</div>
						</div>
					</div>
				</div>
				<!-- works -->
				<div class="image">

					<div class="main_container">

						<div class="work_frame">
							<div class="work_box" v-for="item in workBox" :key="item">
								<img :src="item.src">
							</div>
						</div>
					</div>
				</div>
				<!-- users page -->

				<div class="users">
					<div class="main_container">
						<div class="user_page">
							<div class="row">
								<div class="col-md-2">
									<img src="https://image.ibb.co/jw55Ex/def_face.jpg"
										class="img img-rounded img-fluid" />
									<p class="text-secondary text-center"></p>
								</div>

								<div class="col-md-10">
									<p>
										<a class="float-left"
											href="#"><strong>Maniruzzaman
												Akash</strong></a>

									</p>
									<div class="clearfix"></div>
									<p>Lorem Ipsum is simply dummy text of the pr make but also the leap into electronic
										typesetting, remaining essentially unchanged. It was popularised in the 1960s
										with the release of Letraset sheets containing Lorem Ipsum passages, and more
										recently with desktop publishing software like Aldus PageMaker including
										versions of Lorem Ipsum.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- input page -->
				<div class="row">
					<div class="container">
						<form action="/action_page.php" style="padding-top: 50px;">
							<div class="form-group">
								<label for="comment">Comment:</label>
								<textarea class="form-control" rows="5" id="comment" name="text"></textarea>
							</div>
							<div class="submit">
								<button type="button" class="btn btn-danger btn-danger"
									style="background-color: #ff5629; float: right; ">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
</template>

<script>
export default {
    data() {
		return {
			workBox: [
				{src: require('@/assets/image/1.jpg')},
				{src: require('@/assets/image/2.jpg')},
				{src: require('@/assets/image/3.jpg')}
			]
		}
	},
}
</script>

<style lang="">
    
</style>