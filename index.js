
        function change_logo(){
            var anchor_tag = document.getElementById('dv-logo-a');
            if (anchor_tag.innerHTML === 'facebook') {
                anchor_tag.innerHTML = 'Lionel';
            }
            else {
                anchor_tag.innerHTML = 'facebook';
            }
        }
