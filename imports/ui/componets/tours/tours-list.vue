<template>
    <main>
		
		<section class="hero_in tours">
			<div class="wrapper">
				<div class="container">
					<h1 class="fadeInUp"><span></span>Paris tours list sidebar</h1>
				</div>
			</div>
		</section>
		<!--/hero_in-->
		
		<div class="filters_listing sticky_horizontal">
			<div class="container">
				<ul class="clearfix">
					<li>
						<div class="switch-field">
							<input type="radio" id="all" name="listing_filter" value="all" checked data-filter="*" class="selected">
							<label for="all">All</label>
							<input type="radio" id="popular" name="listing_filter" value="popular" data-filter=".popular">
							<label for="popular">Popular</label>
							<input type="radio" id="latest" name="listing_filter" value="latest" data-filter=".latest">
							<label for="latest">Latest</label>
						</div>
					</li>
					<li>
						<div class="layout_view">
							<a href="tours-grid-isotope.html"><i class="icon-th"></i></a>
							<a href="#0" class="active"><i class="icon-th-list"></i></a>
						</div>
					</li>
					<li>
						<a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
					</li>
				</ul>
			</div>
			<!-- /container -->
		</div>
		<!-- /filters -->
		
		<div class="collapse" id="collapseMap">
			<div id="map" class="map"></div>
		</div>
		<!-- End Map -->

		<div class="container margin_60_35">
			<div class="row">
				<aside class="col-lg-3">
					<div class="custom-search-input-2 inner-2">
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Terms...">
							<i class="icon_search"></i>
						</div>
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Where">
							<i class="icon_pin_alt"></i>
						</div>
						<div class="form-group">
						<select class="wide">
							<option>All Categories</option>	
							<option>Museums</option>
							<option>Churches</option>
							<option>Historic</option>
							<option>Walking</option>
						</select>
						</div>
						<input type="submit" class="btn_search" value="Search">
					</div>
					<!-- /custom-search-input-2 -->
					<div id="filters_col">
						<a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt">Filters </a>
						<div class="collapse show" id="collapseFilters">
							<div class="filter_type">
                                <h6>Duration</h6>
                                <input type="text" id="range" name="range" value="">
                            </div>
							<div class="filter_type">
								<h6>Rating</h6>
								 <ul>
                                    <li>
                                        <label>Superb: 9+</label>
                                        <input type="checkbox" class="js-switch" checked>
                                    </li>
                                    <li>
                                        <label>Very good: 8+</label>
                                        <input type="checkbox" class="js-switch">
                                    </li>
                                    <li>
                                        <label>Good: 7+</label>
                                        <input type="checkbox" class="js-switch">
                                    </li>
                                    <li>
                                        <label>Pleasant: 6+</label>
                                        <input type="checkbox" class="js-switch">
                                    </li>
                                    <li>
                                        <label>No rating</label>
                                        <input type="checkbox" class="js-switch">
                                    </li>
                                </ul>
							</div>
						</div>
						<!--/collapse -->
					</div>
					<!--/filters col-->
				</aside>
				<!-- /aside -->

				<div class="col-lg-9" id="list_sidebar">
					<div class="isotope-wrapper">
					<div class="box_list isotope-item popular">
						<div class="row no-gutters">
							<div class="col-lg-5">
								<figure>
									<small>Historic</small>
									<a href="tour-detail.html"><img src="img/tour_1.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
								</figure>
							</div>
							<div class="col-lg-7">
								<div class="wrapper">
									<a href="#0" class="wish_bt"></a>
									<h3><a href="tour-detail.html">Arc Triomphe</a></h3>
									<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
									<span class="price">From <strong>$54</strong> /per person</span>
								</div>
								<ul>
									<li><i class="icon_clock_alt"></i> 1h 30min</li>
									<li><div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /box_list -->
					<div class="box_list isotope-item latest">
						<div class="row no-gutters">
							<div class="col-lg-5">
								<figure>
									<small>Churches</small>
									<a href="tour-detail.html"><img src="img/tour_2.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
								</figure>
							</div>
							<div class="col-lg-7">
								<div class="wrapper">
									<a href="#0" class="wish_bt"></a>
									<h3><a href="tour-detail.html">Notredam</a></h3>
									<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
									<span class="price">From <strong>$124</strong> /per person</span>
								</div>
								<ul>
									<li><i class="icon_clock_alt"></i> 1h 30min</li>
									<li><div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /box_list -->
					<div class="box_list isotope-item popular">
						<div class="row no-gutters">
							<div class="col-lg-5">
								<figure>
									<small>Museum</small>
									<a href="tour-detail.html"><img src="img/tour_3.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
								</figure>
							</div>
							<div class="col-lg-7">
								<div class="wrapper">
									<a href="#0" class="wish_bt"></a>
									<h3><a href="tour-detail.html">Pompidue Museum</a></h3>
									<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
									<span class="price">From <strong>$45</strong> /per person</span>
								</div>
								<ul>
									<li><i class="icon_clock_alt"></i> 1h 30min</li>
									<li><div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /box_list -->
					<div class="box_list isotope-item popular">
						<div class="row no-gutters">
							<div class="col-lg-5">
								<figure>
									<small>Historic</small>
									<a href="tour-detail.html"><img src="img/tour_4.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
								</figure>
							</div>
							<div class="col-lg-7">
								<div class="wrapper">
									<a href="#0" class="wish_bt"></a>
									<h3><a href="tour-detail.html">Versailles</a></h3>
									<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
									<span class="price">From <strong>$25</strong> /per person</span>
								</div>
								<ul>
									<li><i class="icon_clock_alt"></i> 1h 30min</li>
									<li><div class="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /box_list -->
					<div class="box_list isotope-item latest">
						<div class="row no-gutters">
							<div class="col-lg-5">
								<figure>
									<small>Walking</small>
									<a href="tour-detail.html"><img src="img/tour_5.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
								</figure>
							</div>
							<div class="col-lg-7">
								<div class="wrapper">
									<a href="#0" class="wish_bt"></a>
									<h3><a href="tour-detail.html">Tour Eiffel</a></h3>
									<p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>
									<span class="price">From <strong>$65</strong> /per person</span>
								</div>
								<ul>
									<li><i class="icon_clock_alt"></i> 1h 30min</li>
									<li><div class="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /box_list -->
					</div>
					<!-- /isotope-wrapper -->

					<p class="text-center add_top_30"><a href="#0" class="btn_1 rounded">Load more</a></p>
				</div>
				<!-- /col -->
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
		<div class="bg_color_1">
			<div class="container margin_60_35">
				<div class="row">
					<div class="col-md-4">
						<a href="#0" class="boxed_list">
							<i class="pe-7s-help2"></i>
							<h4>Need Help? Contact us</h4>
							<p>Cum appareat maiestatis interpretaris et, et sit.</p>
						</a>
					</div>
					<div class="col-md-4">
						<a href="#0" class="boxed_list">
							<i class="pe-7s-wallet"></i>
							<h4>Payments and Refunds</h4>
							<p>Qui ea nemore eruditi, magna prima possit eu mei.</p>
						</a>
					</div>
					<div class="col-md-4">
						<a href="#0" class="boxed_list">
							<i class="pe-7s-note2"></i>
							<h4>Quality Standards</h4>
							<p>Hinc vituperata sed ut, pro laudem nonumes ex.</p>
						</a>
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /bg_color_1 -->
	</main>
	<!--/main-->
</template>
