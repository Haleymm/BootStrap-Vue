
			$(document).ready(function() {
				// Use attr() to add an id, rel, and title.
				$('div.chapter a[href*="wikipedia"]').attr({
					rel: 'external',
					title: function() {
						return 'Learn more about ' + $(this).text() + ' at Wikipedia.';
					},
					id: function(index, oldValue) {
						return 'wikilink-' + index;
					}
				});

				$('<a href="#top">back to top</a>').insertAfter('div.chapter p');
				$('<a id="top"></a>').prependTo('body');
//				$('span.footnote').insertBefore('#footer')
//					//使用.wrapAll()把所有脚注都包含在一个<ol>中
//					.wrapAll('<ol id="notes"></ol>')
//					.wrap('<li></li>');;
				//利用.each()回调的参数,给脚注添加编号
				var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
				$('span.footnote').each(function(index) {
					//this 是当前DOM对象
					$('<sup>' + (index + 1) + '</sup>').insertBefore(this);
					$(this).appendTo($notes).wrap('<li></li>');
				});
				
				
			});