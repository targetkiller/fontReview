/*
*
* @author:tqtan;
* @date:2013/12/24;
* @content:fontReview;
*
*/
var defaultText = "显示效果";
var wordStr = defaultText;//文本
var family1 = family2 = "Arial";//字体
var size1 = size2 = "14px";//尺寸
var lineheight1 = lineheight2 = "16px";//行高
var letterspacing1 = letterspacing2 = "0px";//字距
var textalign1 = textalign2 = "left";//对齐
var wordspace1 = wordspace2 = "normal";//词距
var decoration1 = decoration2 = "none";//修饰
var color1 = color2 = "#000";
var bgcolor1 = bgcolor2 = "#fff";

$("#input-text").keyup(function(){
        wordStr = $(this).val();
        draw();
    });

$('#input-text').focus(function(){
	$(this).parent('.text-wrap').addClass('input-text-active');
	if($(this).val()==""){
        wordStr = defaultText;
        draw();
    }
});

$('#input-text').blur(function(){
	$(this).parent('.text-wrap').removeClass('input-text-active');
	if(wordStr==""){
		wordStr = defaultText;
	}
	draw();
});

//showmore
$('.showmore1').click(function(){
	var $more1 = $('.more1');
	if($more1.hasClass('hide')){
		$more1.slideDown(100).removeClass('hide');
		$(this).text("隐藏");
	}
	else{
		$more1.slideUp(100).addClass('hide');
		$(this).text("更多");
	}
});
$('.showmore2').click(function(){
	var $more2 = $('.more2');
	if($more2.hasClass('hide')){
		$more2.slideDown(100).removeClass('hide');
		$(this).text("隐藏");
	}
	else{
		$more2.slideUp(100).addClass('hide');
		$(this).text("更多");
	}
});

//import
$('.out1').click(function(){
	var $c1 = $('.code1');
	if($c1.hasClass('hide')){
		$('.code1').text($('#preview1 .result-text').attr('style')).slideDown(100).removeClass('hide');
		$(this).text("隐藏CSS");
	}
	else{
		$('.code1').slideUp(100).addClass('hide');
		$(this).text("显示CSS");
	}
});
$('.out2').click(function(){
	var $c1 = $('.code2');
	if($c1.hasClass('hide')){
		$('.code2').text($('#preview2 .result-text').attr('style')).slideDown(100).removeClass('hide');
	}
	else{
		$('.code2').slideUp(100).addClass('hide');
	}
});
function refreshImport(){
	$('.code1').text($('#preview1 .result-text').attr('style'));
	$('.code2').text($('#preview2 .result-text').attr('style'));
}

//f1
$('#f1-family').change(function(){
	family1 = $(this).find("option:selected").val();
	draw();
});
$('#f1-color').change(function(){
	color1 = "#"+$(this).val();
	draw();
});
$('#f1-bgcolor').change(function(){
	bgcolor1 = "#"+$(this).val();
	draw();
});
$('#f1-size').change(function(){
	size1 = $(this).find("option:selected").val();
	draw();
});
$('#f1-lineheight').change(function(){
	lineheight1 = $(this).find("option:selected").val();
	draw();
});
$('#f1-letterspacing').change(function(){
	letterspacing1 = $(this).find("option:selected").val();
	draw();
});
$('#f1-textalign').change(function(){
	textalign1 = $(this).find("option:selected").val();
	draw();
});
$('#f1-wordspace').change(function(){
	wordspace1 = $(this).find("option:selected").val();
	draw();
});
$('#f1-decoration').change(function(){
	decoration1 = $(this).find("option:selected").val();
	draw();
});


//f2
$('#f2-family').change(function(){
	family2 = $(this).find("option:selected").val();
	draw();
});
$('#f2-color').change(function(){
	color2 = "#"+$(this).val();
	draw();
});
$('#f2-bgcolor').change(function(){
	bgcolor2 = "#"+$(this).val();
	draw();
});
$('#f2-size').change(function(){
	size2 = $(this).find("option:selected").val();
	draw();
});
$('#f2-lineheight').change(function(){
	lineheight2 = $(this).find("option:selected").val();
	draw();
});
$('#f2-letterspacing').change(function(){
	letterspacing2 = $(this).find("option:selected").val();
	draw();
});
$('#f2-textalign').change(function(){
	textalign2 = $(this).find("option:selected").val();
	draw();
});
$('#f2-wordspace').change(function(){
	wordspace2 = $(this).find("option:selected").val();
	draw();
});
$('#f2-decoration').change(function(){
	decoration2 = $(this).find("option:selected").val();
	draw();
});

function draw(){
	var $p1 = $('#preview1 .result-text');
	var $p2 = $('#preview2 .result-text');

	$p1.css({"font-family":family1,
			 "color":color1,
			 "background-color":bgcolor1,
	     	 "font-size":size1,
		     "line-height":lineheight1,
		     "letter-spacing":letterspacing1,
		     "text-align":textalign1,
		     "word-spacing":wordspace1,
		     "text-decoration":decoration1})
			.text(wordStr);
	$p2.css({"font-family":family2,
			 "color":color2,
			 "background-color":bgcolor2,
	     	 "font-size":size2,
		     "line-height":lineheight2,
		     "letter-spacing":letterspacing2,
		     "text-align":textalign2,
		     "word-spacing":wordspace2,
		     "text-decoration":decoration2})
			.text(wordStr);

    var words = wordStr.split("\n");
    $p1.text("");
    $p2.text("");
    //若有换行，则循环赋值<br>
    if(words.length > 1){
	    for(var i = 0 ;i < words.length ; i++){
	    	$p1.append(words[i]).append("<br />");
	    	$p2.append(words[i]).append("<br />");
	    }
    }
    else{
    	$p1.text(wordStr);
    	$p2.text(wordStr);
    }
	refreshImport();
}

draw();
