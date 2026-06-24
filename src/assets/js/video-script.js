$(function () {
    function openModal(videoUrl) {
        $('#modal-video-frame').attr('src', `${videoUrl}?autoplay=1`);
        $('#modal-overlay').css('display', 'flex');
    }

    function closeModal() {
        $('#modal-overlay').hide();
        $('#modal-video-frame').attr('src', '');
    }

    $(document).on('click.fabuluxVideo', '.request-loader', function () {
        openModal($(this).data('video'));
    });

    $(document).on('click.fabuluxVideo', '.modal-close', closeModal);

    $(document).on('click.fabuluxVideo', '#modal-overlay', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });
});
