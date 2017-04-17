
(function () {
	$('img').on('click', function() {
		$.getJSON('includes/ajaxQuery.php', { model : this.id}, function(data) {
			console.log(data);

			$('.contentName').text(data.contentName);
			$('.hidden').removeClass('hidden');
			$('.contentDetails').text(data.contentDetails);
			$('.contentImage').text(data.contentImage);


		});
	});
})();