import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
// import pic4 from '../assets/images/pic04.jpg';
// import pic5 from '../assets/images/pic05.jpg';
import banner from '../assets/images/banner.jpg';

const IndexPage = () => <Layout>
	<article id="main">
		<header>
			<h2>Contact Us</h2>
			<p>Get in touch today, for a free consultation, to see how we can leverage technology in order to drive conversions and boost sales.</p>
		</header>
		<section className="wrapper style5">
			<div className="inner">

				<section>
					
					<header>
						<h4>Increase your sales now</h4>
						<p>The journey of a thousand miles begins with a first step.</p>
					</header>
					<p>Let's chat, over coffee. No obligation, just two friends discussing business and strategies. I guarantee some actionable insights that
                        you can immediatley implement into your business to grow your audience and increase conversions.
                    </p>
					
					
					
					<blockquote>Sometimes the smallest step in the right direction ends up being the biggest step of your
                        life. Tip toe if you must, BUT TAKE THE STEP!
                    </blockquote>
					
					
				</section>

				<section>
					<h4>Form</h4>
					<form method="post" action="https://formspree.io/mwklvaew">
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall">
								<input type="text" name="name" id="demo-name" defaultValue="" placeholder="Name" />
							</div>
							<div className="col-6 col-12-xsmall">
								<input type="email" name="email" id="demo-email" defaultValue="" placeholder="Email" />
							</div>
							
							<div className="col-4 col-12-small">
								<input type="radio" id="demo-priority-low" name="priority" defaultChecked />
								<label htmlFor="demo-priority-low">Low</label>
							</div>
							<div className="col-4 col-12-small">
								<input type="radio" id="demo-priority-normal" name="priority" />
								<label htmlFor="demo-priority-normal">Normal</label>
							</div>
							<div className="col-4 col-12-small">
								<input type="radio" id="demo-priority-high" name="priority" />
								<label htmlFor="demo-priority-high">High</label>
							</div>
							
							<div className="col-6 col-12-small">
								<input type="checkbox" id="demo-human" name="demo-human" defaultChecked />
								<label htmlFor="demo-human">Not a robot</label>
							</div>
							<div className="col-12">
								<textarea name="message" id="demo-message" placeholder="Enter your requirements" rows="6"></textarea>
							</div>
							<div className="col-12">
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="primary" /></li>
									<li><input type="reset" value="Reset" /></li>
								</ul>
							</div>
						</div>
					</form>
				</section>

				<section>
					<h4>Contact: Muneer</h4>
					<h5>(+27) 082 566 2574</h5>
					<div className="box alt">
						<div className="row gtr-50 gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={banner} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
							<div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
						</div>
					</div>
					
				</section>

			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
