$(document).ready(function() {
    $('.preloader-background').delay(1000).fadeOut('slow');
});
var mycolour = {};
mycolour['forestgreen'] = '#233329';
mycolour['lightforestgreen'] = '#63D471';
mycolour['midnightblue'] = '#021B79';
mycolour['lightmidnightblue'] = '#0575E6';
mycolour['tealish'] = '#006D5B';
mycolour['lighttealish'] = '#00C9A8';
mycolour['blood'] = '#33001b';
mycolour['lightblood'] = '#ff0084';
mycolour['girl'] = '#861657';
mycolour['lightgirl'] = '#FFA69E';
mycolour['lavender'] = '#2a0845';
mycolour['lightlavender'] = '#6441A5';
var mybg = {};
mybg['forestgreen'] = 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
mybg['midnightblue'] = 'https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
mybg['tealish'] = 'https://images.unsplash.com/photo-1501408459713-977c880160ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
mybg['blood'] = 'https://images.unsplash.com/photo-1520624598504-ed830bd895d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
mybg['girl'] = 'https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60';
mybg['lavender'] = 'https://images.unsplash.com/photo-1477093782505-e10aaeb27c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
$(document).ready(function() {
    var selectedcolour = 'lavender';
    var colour = mycolour[selectedcolour];
    var lightcolour = mycolour['light' + selectedcolour];
    var bgimage = mybg[selectedcolour];
    $('.sidenav').sidenav();
    $('.sidenav1').sidenav({
        edge: 'right'
    });
    $('.collapsible').collapsible();
    $('.collapsible.expandable').collapsible({
        accordion: false
    });
    $(".dropdown-trigger").dropdown();
    $('.datepicker').datepicker();
    $('select').formSelect();
    $('.tabs').tabs();
    $('.modal').modal({
        dismissible: false
    });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    $('body').css({
        'background-color': '#f5f5f5'
    });
    themechanger(selectedcolour);
    $('.chartdiv').css({
        'height': '320px'
    });
    $('.chartdiv2').css({
        'height': '280px'
    });
    $('#example').DataTable({
        columnDefs: [{
            targets: [0, 1, 2],
            className: 'mdl-data-table__cell--non-numeric'
        }],
        responsive: 'true'
    });
    $('.sec').hide();
    $('#dashboard').show();
    $('a[callShow]').on('click', function() {
        var toShow = $(this).attr('href');
        $('.sec').hide();
        $(toShow).show();
        $('.tabs').tabs();
    });
    $('a[colour]').on('click', function() {
        selectedcolour = $(this).attr('colour');
        themechanger(selectedcolour);
    });
    $("span[data-dismiss='alert']").on('click', function() {
        $(this).parents('.card').hide(1000);
    });

    function themechanger(selectedcolour) {
        colour = mycolour[selectedcolour];
        lightcolour = mycolour['light' + selectedcolour];
        bgimage = mybg[selectedcolour];
        $('.theme-colour').css({
            'background-color': colour,
            'color': 'white'
        });
        $('.theme-colour.gradient').css({
            // 'background': '-webkit-linear-gradient(bottom, ' + colour + ' 0%, ' + lightcolour + ' 100%)',
            'background': '-webkit-linear-gradient(40deg,' + colour + ',' + lightcolour + ')',
            'color': 'white'
        });
        $('.theme-colour.light-colour').css({
            'background-color': lightcolour,
            'color': 'white'
        });
        $('.theme-text-colour').css({
            'color': colour
        });
        $('.subheader').css({
            'color': 'grey'
        });
        $('#page').html(".pagination li a {color:#444 !important;}a.page-link{background-color:inherit !important;}.pagination li.active{background-color:" + colour + " !important;}.pagination li.active a{color:white !important;}.pagination li.disabled a {cursor: default;color: #999 !important;}");
        $('#material-custom').html("input:not([type]):focus:not([readonly]), input[type=date]:not(.browser-default):focus:not([readonly]), input[type=datetime-local]:not(.browser-default):focus:not([readonly]), input[type=datetime]:not(.browser-default):focus:not([readonly]), input[type=email]:not(.browser-default):focus:not([readonly]), input[type=number]:not(.browser-default):focus:not([readonly]), input[type=password]:not(.browser-default):focus:not([readonly]), input[type=search]:not(.browser-default):focus:not([readonly]), input[type=tel]:not(.browser-default):focus:not([readonly]), input[type=text]:not(.browser-default):focus:not([readonly]), input[type=time]:not(.browser-default):focus:not([readonly]), input[type=url]:not(.browser-default):focus:not([readonly]), textarea.materialize-textarea:focus:not([readonly]) {border-bottom: 1px solid " + colour + ";-webkit-box-shadow: 0 1px 0 0 " + colour + ";box-shadow: 0 1px 0 0 " + colour + ";}[type=checkbox]:checked+span:not(.lever):before {    border-right: 2px solid " + colour + ";border-bottom: 2px solid " + colour + ";}input:not([type]):focus:not([readonly])+label, input[type=date]:not(.browser-default):focus:not([readonly])+label, input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label, input[type=datetime]:not(.browser-default):focus:not([readonly])+label, input[type=email]:not(.browser-default):focus:not([readonly])+label, input[type=number]:not(.browser-default):focus:not([readonly])+label, input[type=password]:not(.browser-default):focus:not([readonly])+label, input[type=search]:not(.browser-default):focus:not([readonly])+label, input[type=tel]:not(.browser-default):focus:not([readonly])+label, input[type=text]:not(.browser-default):focus:not([readonly])+label, input[type=time]:not(.browser-default):focus:not([readonly])+label, input[type=url]:not(.browser-default):focus:not([readonly])+label, textarea.materialize-textarea:focus:not([readonly])+label {color: " + colour + ";}.input-field.col .prefix~.validate~label, .input-field.col .prefix~label {width: max-content;}.input-field .prefix.active{color:" + colour + "}.select-dropdown li>a,.select-dropdown li>span{color:" + colour + "}.select-wrapper input.select-dropdown:focus {border-bottom: 1px solid " + colour + ";}.tabs .indicator{background-color:" + colour + " !important}");
        $('#custom').html(".sidenav {background-image: url('" + bgimage + "'); background-size: cover;}");
    }
});