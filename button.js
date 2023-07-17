$(document).ready(function(){
							  var clicks = 0;
							  $("button").click(function() 
															{ 	
																clicks++;
																if(clicks%2===0)
																{
																	console.log("The number of clicks so far is:" + clicks);
																	$("#btn").fadeOut(1300,function()
																				  				 {
																									$(this).css("z-index", -1);
																									
																									$(this).css("cursor", "url('gauntlet.png')");
																									
																									$(this).css("background-image", "url('broken helmet.jpg')");
																									
																									$(this).css("z-index",1);
																								 }
																				 );
																	$("#btn").fadeIn(1300);
																}
																else
																{
																	console.log("The number of clicks so far is:" + clicks);															
																	$("#btn").fadeOut(1300,function()
																				  				 {
																									$(this).css("z-index", -1);
																									
																									$(this).css("cursor", "pointer");																									
																									
																									$(this).css("background-image", "url('tonysuit.jpg')");
																									
																									$(this).css("z-index",1);
																								 }
																				 );
																	$("#btn").fadeIn(1300);
																	
																}
															}
												 );
							}
				 );
				