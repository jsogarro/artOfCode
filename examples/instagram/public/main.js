$(function() {

	var token = window.location.hash.replace("#access_token=", ""),
		access_token = { access_token: token };

		// Makes the Instagram API call
		function getImages(tag, access_token) {

			var url,
				count = 12;

				// url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count;

                url = 'https://api.instagram.com/v1/users/jsogarro/media/recent/'

				$.ajax({
					type: 'GET',
					url: url,
					dataType: 'json',
					data: access_token,
					success: loadData
				});
		}

		// Function that will actually append our images to the DOM
		function loadData(instagram_data) {
			console.log(instagram_data.data);
			var photos,
				photo,
				new_image;

				if (instagram_data.meta.code === 200){
					photos = instagram_data.data;

					for (i in photos){
						photo = photos[i];

						new_image = $('<img src="' +photo.images.standard_resolution.url + '">');
						// $('#target').append(new_image);

					new_image.load(function(){
						$('#target').append($(this).hide());
						   $(this).fadeIn(2000);
						})
					}
				}

		}

		// add search functionality
		$('#search-button').on("click", function(){
			$tag = $('input.search-tag').val();
			getImages($tag, access_token);
		});

});
