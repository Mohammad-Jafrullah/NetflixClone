import React from 'react';
import './OtherWebsite.css';

export default function OtherWebsite() {
    return (
        <>
            <noscript>
                &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMSVB6H"
                height="0" width="0"
                style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
            </noscript>
            {/* End Google Tag Manager (noscript) */}
            <div className="customwidth">
                <header className="lightgrey">
                    <div className="row">
                        <div className="col-sm-2 text-center">
                            <a href="index.php">
                                <img src="images/logo.webp" width="100px" alt="" />
                            </a>
                        </div>
                        <div className="col-sm-7 col-md-7 col-lg-7">
                            <h1>Overseas Education Consultant Pvt. Ltd.</h1>
                            <p>
                                Unlock endless possibilities with our personalized study abroad
                                guidance - provided by the largest consultants group in the
                                industry.
                            </p>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-3">
                            <ul>
                                <li>
                                    <a href="tel:9811370058">
                                        <i className="fa fa-mobile" aria-hidden="true" /> 9811 3700 58
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:9205040600">
                                        <i className="fa fa-mobile" aria-hidden="true" /> 920 5040 600
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <main>
                    <section className="small_heading sub_color pad10 mb-2 mob_size">
                        <h3>
                            We work closely with you to turn your study visa dream into reality.
                        </h3>
                    </section>
                    <section className="small_heading heading_color pad10 mb-2 mob_size">
                        <h3>
                            Our services do not stop at the visa process. We also do accommodation
                            search and post-landing formalities.
                        </h3>
                    </section>
                    <section className="pad20 lightgrey questioncolor">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="box_inner">
                                    <h2 className="sub_color">Reasons Why Students Love Us</h2>
                                    <ul>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" /> Exclusive Fee
                                            Waiver.{" "}
                                            <a href="javascript:void(0);" id="more">
                                                <i className="fa fa-question-circle-o" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" /> Provide tips
                                            to protect yourself from fraud counseling agents.{" "}
                                            <a href="javascript:void(0);" id="moreone">
                                                <i className="fa fa-question-circle-o" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" /> We hold the
                                            largest international scholarship database in Delhi NCR.
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" /> You will
                                            access one personal counsellor with 24x7 support.
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" /> Our pre-visa
                                            and post-visa services are beloved by students.
                                        </li>
                                    </ul>
                                    <ul id="comapnymore" style={{ display: "none" }}>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" /> You can enjoy
                                            your first premium counseling session for free.
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" /> Join a
                                            community of 27,000+ students who are aspiring to study abroad
                                            after 12th grade or graduation.
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" /> You will get
                                            access to attend exclusive webinars conducted by direct
                                            universities.
                                        </li>
                                        <li>
                                            <i className="fa fa-check" aria-hidden="true" /> Easy process
                                            to apply for scholarships, get loans, and other financial help
                                            to study abroad.
                                        </li>
                                    </ul>
                                    <button id="companyshow" onclick="companyshow()">
                                        Show More
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <img src="images/front.webp" alt="" />
                            </div>
                            <div className="col-sm-4">
                                <div className="box_inner ">
                                    <h2 className="sub_color">LET US CONTACT YOU</h2>
                                    <div className="details_form ">
                                        <p>Let's talk about your study abroad options!</p>
                                        <img src="images/flag.webp" alt="" />
                                        <form action="mail.php" method="post">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control mb-2"
                                                placeholder="Your Name"
                                                required=""
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-control mb-2 noword"
                                                minLength={10}
                                                maxLength={10}
                                                onkeypress="return /[0-9a-zA-Z]/i.test(event.key)"
                                                placeholder="Contact Number"
                                                required=""
                                            />
                                            <input
                                                type="tel"
                                                name="whatsapp"
                                                className="form-control mb-2 noword"
                                                minLength={10}
                                                maxLength={10}
                                                onkeypress="return /[0-9a-zA-Z]/i.test(event.key)"
                                                placeholder="WhatsApp Number"
                                                required=""
                                            />
                                            <input
                                                type="text"
                                                name="city"
                                                className="form-control mb-2"
                                                placeholder="Your City"
                                                required=""
                                            />
                                            <input
                                                type="submit"
                                                name="submit"
                                                className="form-control mb-2 btn btn-primary"
                                                defaultValue="Submit & Get A Call Back "
                                            />
                                            <p>
                                                Get expert advice on studying abroad and Unlock Study Abroad
                                                Opportunities
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="dreamcarreer whitebg">
                        <div className="heading_color heading pad10 ">
                            <h2>STREAMS &amp; COURSES</h2>
                        </div>
                        <div className="container">
                            <h5 className="text-center mb-0">Choose Your Dream Career</h5>
                            <div className="row pad50">
                                <div className="col-sm-4">
                                    <div className="dream_details">
                                        <img src="images/degree1.webp" alt="" />
                                        <h3 id="listone">List of Courses</h3>
                                        <a
                                            href="javascript:void(0);"
                                            id="checkcourse"
                                            className="btn btn-dark"
                                        >
                                            Check Courses
                                        </a>
                                        <div className="dream_pnl" id="dreamone">
                                            <h5>List Of Courses</h5>
                                            <hr />
                                            <ul>
                                                <li>Undergraduate</li>
                                                <li>Postgraduate</li>
                                                <li>Level 4 Apprenticeship</li>
                                                <li>Level 3 Apprenticeship</li>
                                                <li>BA</li>
                                                <li>MA</li>
                                                <li>Degree with Foundation Year</li>
                                                <li>Masters</li>
                                                <li>Honours Bachelors Degree</li>
                                                <li>Bachelors Degree</li>
                                                <li>Masters Degree</li>
                                                <li>Graduate Certificate</li>
                                                <li>Graduate Diploma</li>
                                                <li>Bachelors Degree</li>
                                                <li>Graduate Certficate</li>
                                                <li>Diploma</li>
                                                <li>Double Degree</li>
                                                <li>Double</li>
                                                <li>Double degree including honours</li>
                                                <li>Honors Degree</li>
                                                <li>BA (Hons)</li>
                                                <li>MSc Postgraduate</li>
                                                <li>BA (Hons) Undergraduate</li>
                                                <li>BSc (Hons) Undergraduate</li>
                                                <li>BA (Hons) Degree Apprenticeship</li>
                                                <li>MA Postgraduate</li>
                                                <li>MBA Postgraduate</li>
                                                <li>Advanced Diploma</li>
                                                <li>PG Diploma</li>
                                                <li>Contact us for additional courses</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="dream_details">
                                        <img src="images/degree1.webp" alt="" />
                                        <h3 id="listtwo">List of Advanced Courses</h3>
                                        <a
                                            href="javascript:void(0);"
                                            id="checklist"
                                            className="btn btn-dark"
                                        >
                                            Check Courses
                                        </a>
                                        <div className="dream_pnl" id="dreamtwo">
                                            <h5>List of Advanced Courses</h5>
                                            <hr />
                                            <ul>
                                                <li>Advanced Engineering</li>
                                                <li>Actuarial Science</li>
                                                <li>Data science and AI</li>
                                                <li>Biomedical Engineering</li>
                                                <li>Petroleum Engineering</li>
                                                <li>Environmental Engineering</li>
                                                <li>Computer Network Engineering</li>
                                                <li>Information Technology</li>
                                                <li>Cyber Security &amp; Ethical Hacking</li>
                                                <li>Computer Science</li>
                                                <li>Pharmaceutical Science</li>
                                                <li>Cybersecurity and Bioinformatics</li>
                                                <li>Ecotechnology</li>
                                                <li>Urban design and planning</li>
                                                <li>Econometrics</li>
                                                <li>Dance Therapy</li>
                                                <li>Gemology</li>
                                                <li>Contact us for additional courses</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="dream_details">
                                        <img src="images/degree1.webp" alt="" />
                                        <h3 id="listthree">List Popular Courses</h3>
                                        <a
                                            href="javascript:void(0);"
                                            id="checkpopular"
                                            className="btn btn-dark"
                                        >
                                            Check Courses
                                        </a>
                                        <div className="dream_pnl" id="dreamthree">
                                            <h5>List of Popular Courses</h5>
                                            <hr />
                                            <ul>
                                                <li>Computer Science Engineering</li>
                                                <li>Hospitality and Tourism</li>
                                                <li>Accounting and Finance</li>
                                                <li>Pharmacy</li>
                                                <li>Health and Medicine</li>
                                                <li>Building and Architecture</li>
                                                <li>Economics</li>
                                                <li>Welfare Studies and Services</li>
                                                <li>Environmental Science</li>
                                                <li>Law and Legal Studies</li>
                                                <li>Media and Communication</li>
                                                <li>Chemistry</li>
                                                <li>Physics</li>
                                                <li>Teaching and Education</li>
                                                <li>Performing Arts and Music</li>
                                                <li>Info – Science and Librarianship</li>
                                                <li>Language and Culture</li>
                                                <li>Political and Social Science</li>
                                                <li>Art and Design</li>
                                                <li>Geography</li>
                                                <li>History</li>
                                                <li>Marketing Media and Communications</li>
                                                <li>Arts and Design</li>
                                                <li>Mathematics</li>
                                                <li>Agriculture Sciences</li>
                                                <li>Information Science</li>
                                                <li>Biological and Life Sciences</li>
                                                <li>Popular &amp; Advanced Courses</li>
                                                <li>Computer and IT</li>
                                                <li>Nursing</li>
                                                <li>Health</li>
                                                <li>Contact us for additional courses</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="slideinsta" />
                    <section className="marquee_panel lightgrey d-none">
                        <div className="marquee-carousel" id="grouploop-1">
                            <div className="item-wrap">
                                <div className="item">
                                    <h2>250+ Projects</h2>
                                    <p>Delivered</p>
                                </div>
                                <div className="item">
                                    <h2>100+ Happy Clients</h2>
                                    <p>Worldwide</p>
                                </div>
                                <div className="item">
                                    <h2>10+ Mastered</h2>
                                    <p>Next-Gen Technology</p>
                                </div>
                                <div className="item">
                                    <h2>9+ Years</h2>
                                    <p>Experience</p>
                                </div>
                                <div className="item">
                                    <h2>7+ ROI-Driven</h2>
                                    <p>Strategies</p>
                                </div>
                                <div className="item">
                                    <h2>9+ Countries</h2>
                                    <p>Serving</p>
                                </div>
                            </div>
                        </div>
                        <div className="marquee-carousel d-none" id="grouploop-2">
                            <div className="item-wrap">
                                <div className="item">
                                    <h2>PPC Management</h2>
                                </div>
                                <div className="item">
                                    <h2>PPC Consultation</h2>
                                </div>
                                <div className="item">
                                    <h2>PPC Account Audit</h2>
                                </div>
                                <div className="item">
                                    <h2>ROI-Driven Strategies</h2>
                                </div>
                                <div className="item">
                                    <h2>Pro-Level Results</h2>
                                </div>
                                <div className="item">
                                    <h2>Trusted by Big Brands</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about_us lightgrey">
                        <div className="row pad50">
                            <div className="col-sm-6">
                                <div className="box_inner">
                                    <h2 className="sub_color">
                                        Why choose us as the top option in Delhi NCR?
                                    </h2>
                                    <ul>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" /> We
                                            only recommend reputed colleges.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Registered Member of CICC -{" "}
                                            <a href="javascript:void(0);" id="morethree">
                                                <i className="fa fa-question-circle-o" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Get help for foreign education, housing, and part-time jobs
                                            from our student network.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Our close relations with universities allow you to benefit
                                            from having your application reviewed prior to submission.
                                        </li>
                                    </ul>
                                    <ul id="delhincr" style={{ display: "none" }}>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Provide advice on deciding which offer to accept or reject.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Your first study abroad counseling session will be FREE.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            International universities offer unbeatable employment and
                                            wage prospects, but also have very high costs. If the
                                            financial aspect is important for you, our counselors will
                                            prepare an ad-hoc plan to minimize the economic impact for you
                                            and your family. They will suggest the best universities for
                                            you based on scholarship and financial aid availability. They
                                            will help you in the admission process for scholarships and
                                            funding from third parties and will contact the admission
                                            committees to negotiate higher scholarships for you. We have
                                            already achieved increases in the scholarships offered to our
                                            students on several occasions in delhi ncr as report of
                                            2022-2023.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" /> We
                                            are much more than a study abroad agency; we are really true
                                            to our mission. That is why we have decided to devote part of
                                            our revenues to non-profit projects such as P2P and to create
                                            a scholarship fund for our students. You will choose us
                                            because of our professional experience but also because of our
                                            true interest in what is best for you.
                                        </li>
                                    </ul>
                                    <button id="delhincrshow" onclick="delhincrshow()">
                                        Show More
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="box_inner">
                                    <h2 className="sub_color">
                                        Secrets to Know before Studying Abroad
                                    </h2>
                                    <ul>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Reasons why some students come back after their visa approval?
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Reviews of the pros and cons that many students face when
                                            attending the university of their choice.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            What the offer you accept or reject initially for best
                                            outcomes in future.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" /> We
                                            specialize to get maximum scholarships
                                        </li>
                                    </ul>
                                    <ul id="workshow" style={{ display: "none" }}>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Get assistance about accommodation, and part-time work from
                                            our student network.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            What’s the refund policy for the program?
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            How Student expenses can be compensated with part time jobs
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Tips for using part-time employment to compensate for student
                                            expenses
                                        </li>
                                    </ul>
                                    <button id="workmore" onclick="workmore()">
                                        Show More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about_us whitebg">
                        <div className="row pad50">
                            <div className="col-sm-6">
                                <div className="box_inner">
                                    <h2 className="sub_color">How Personal Consultant Helps You</h2>
                                    <ul>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Personal Consultation –</b> We will evaluate your study
                                            goals and tailor advice on what and where to apply.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Application Creation -</b> We will professionally complete
                                            application forms to universities on your behalf.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Personal Statement Construction -</b> Advice on writing and
                                            structuring your personal statement
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Application Tracking -</b> We will track your application
                                            after submission, closely monitoring its progress.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Your Guaranteed Offer -</b> We will guarantee you an offer
                                            or you will be refunded in full!
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <img src="images/team.webp" alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="about_us lightgrey">
                        <div className="row pad50">
                            <div className="col-sm-6">
                                <div className="box_inner">
                                    <h2 className="sub_color">
                                        Additional services that provide extra value.
                                    </h2>
                                    <ul>
                                        <li>
                                            {" "}
                                            These are our personalized services that enhance your moving
                                            experience. We offer more than just pre-departure and
                                            post-landing services; we also help with visitor visas, air
                                            tickets, travel insurance, and forex.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Post Landing Services</b> We have a range of Post Landing
                                            Services which include.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Placement Assistance</b> We provide you with an insight of
                                            the recruitment world and assist you in getting that dream
                                            job; we assure arranging a line of interviews for you that fit
                                            your profile and provide you assistance in preparing for the
                                            interview.
                                        </li>
                                    </ul>
                                    <ul id="extravalue" style={{ display: "none" }}>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Settlement Services</b> We offer a host of Settlement
                                            Services like.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Temporary Accommodation Assistance</b> We will fix one
                                            according to your budget till you find a place to stay.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Permanent Accommodation Assistance</b> For those who have
                                            decided on a place and want a house to stay in.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Orientation</b> Specialised orientation by country experts
                                            on preparing for interviews, making of resumes according to
                                            the accepted formats of the country.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Relocation Assistance</b> Assistance that will help you to
                                            settle in the new country.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Personal Guide</b> Tour &amp; personal orientation of the
                                            city you are arriving in.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Getting you a Mobile and SIM Card
                                        </li>
                                    </ul>
                                    <button id="extravaluemore" onclick="extravaluemore()">
                                        Show More
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <img src="images/team1.webp" alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="about_us lightgrey">
                        <div className="row pad50">
                            <div className="col-sm-6">
                                <div className="box_inner">
                                    <h2 className="sub_color">About Us</h2>
                                    <ul>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Trust the best visa consultant in Delhi NCR, with a premium
                                            location and a proven track record of excellence since 2011.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Our clients are our strength, and our success rate never goes
                                            below 98%. We are listed among the top 10 trusted education
                                            visa consultants in India by certified reports of 2022 &amp;
                                            2023.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Our process is verified. In less than 12 years, we have
                                            counselled over 55,000 applicants and processed over 4700+
                                            Study Visas, 1000+ successful immigration &amp; PR visas, and
                                            tourist visas.
                                        </li>
                                    </ul>
                                    <ul id="aboutus" style={{ display: "none" }}>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Our visa packages are well-structured and cost-effective. In
                                            case of an unfortunate rejection, we follow a 100% refund
                                            policy.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Our services do not stop at the visa process. We also do
                                            accommodation search and post-landing formalities.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" /> We
                                            are a team of informed and committed senior education
                                            advisors/counsellors who understand the needs of the students
                                            and their parents or sponsors. We firmly believe in customer
                                            service to the students and our client institutions. Our
                                            strongly student-centered approach to counseling means we give
                                            students the fullest possible information on all available
                                            options to help them make sensible decisions.
                                        </li>
                                    </ul>
                                    <button id="aboutusmore" onclick="aboutusmore()">
                                        Show More
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="box_inner">
                                    <h2 className="sub_color">Our Tutors </h2>
                                    <ul>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Our consultants possess an average of over 20 years of
                                            experience and have worked in the admission committees of some
                                            of the top 15 universities in the world. Our overseas tutors
                                            will prepare you for the admission’ exams, leveraging their
                                            twenty years of experience in the sector, with targeted plans
                                            aimed at maximizing your performance in the exam.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            <b>Our tutors</b> and college counselors live on site and
                                            travel 6 weeks a year to visit universities and participate in
                                            the best conferences in the sector. The result is a team that
                                            is always at the forefront of trends in admission applications
                                            to foreign universities.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about_us lightgrey">
                        <div className="row pad50">
                            <div className="col-sm-6">
                                <div className="box_inner">
                                    <h2 className="sub_color">Our Mission</h2>
                                    <ul>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" /> To
                                            provide quality-driven services to clients interested in
                                            studying, migrating, traveling, or visiting anywhere in the
                                            world.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            Our service aims to assist students in securing the maximum
                                            number of scholarships available from universities and
                                            colleges.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The services offered by the company are fast and ensure
                                            results.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The company trains and constantly upgrades its expertise to
                                            provide the best possible services to its clients.
                                        </li>
                                    </ul>
                                    <ul id="missionbtn" style={{ display: "none" }}>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The company's dedicated team of employees strives to provide
                                            clients with the best solution to all their concerns.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The company treats each of its clients as special, setting it
                                            apart from others in the industry.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The company promises to deliver desired results within the
                                            minimum time frame.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The company offers services at the most reasonable prices.
                                        </li>
                                    </ul>
                                    <button id="missionmore" onclick="missionmore()">
                                        Show More
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="box_inner">
                                    <h2 className="sub_color">Our Vision </h2>
                                    <ul>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The company's vision is to create an innovative,
                                            quality-driven organization.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The organization's ultimate vision is to become a global
                                            leader in the visa consultancy industry.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The organization aims to be reliable and affordable for its
                                            clients.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The company's vision is to create a better, secure career and
                                            lifestyle for people who wish to settle abroad.
                                        </li>
                                    </ul>
                                    <ul id="visionshow" style={{ display: "none" }}>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The organization is dedicated to providing high-quality
                                            services that meet the needs of its clients.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The company strives to be a leader in the industry by setting
                                            new standards of excellence.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The organization is committed to providing the best possible
                                            processes to ensure the satisfaction of its clients.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The company's vision is to provide innovative solutions that
                                            help clients achieve their goals.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The organization aims to build strong relationships with its
                                            clients based on trust and transparency.
                                        </li>
                                        <li>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true" />{" "}
                                            The company is dedicated to providing exceptional customer
                                            service to ensure the satisfaction of its clients.
                                        </li>
                                    </ul>
                                    <button id="visionmore" onclick="visionmore()">
                                        Show More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section_one lightgrey pad50">
                        <div className="section-title">
                            <h3 className="mb-0 text-uppercase fw-bold">FAQ's</h3>
                            <h5>FAQ</h5>
                        </div>
                        <div className="section_content redbdr">
                            <ul>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question1"
                                    >
                                        <div className="date">Q.1</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>
                                                How long does the application process for studying abroad
                                                take?
                                            </h2>
                                            <div className="collapse show" id="question1">
                                                <p>
                                                    Before starting to ask any other study abroad questions
                                                    from your consultants, it is advised to ask first about
                                                    the academic year of the university. The universities have
                                                    varied academic years. So, confirm this before filling out
                                                    the application form to study abroad.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question2"
                                    >
                                        <div className="date">Q.2</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>Can I work while studying?</h2>
                                            <div className="collapse" id="question2">
                                                <p>
                                                    Another common question about studying abroad is whether a
                                                    student can work while studying or not. Many countries
                                                    allow students to do part-time work while studying. Many
                                                    foreign students opt for part-time jobs in order to take
                                                    care of living expenses in a foreign country.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question3"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question3"
                                    >
                                        <div className="date">Q.3</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>Does studying abroad guarantee a great career?</h2>
                                            <div className="collapse" id="question3">
                                                <p>
                                                    This is one of the common study abroad frequently asked
                                                    questions. However, the answer to this question solely
                                                    depends on academic performance. However, a CV with an
                                                    abroad education might impress an employer. An employer
                                                    knows that if you have studied abroad, you must have
                                                    additional skills and exposure.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question4"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question4"
                                    >
                                        <div className="date">Q.4</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>How much will the course cost?</h2>
                                            <div className="collapse" id="question4">
                                                <p>
                                                    The overall cost will ultimately depend on a variety of
                                                    factors including your destination city, cost of living,
                                                    personal expenses, the fees charged by your university,
                                                    additional costs like insurance etc. There are many state
                                                    universities which offer quality education at marginal
                                                    costs compared to private universities. Many of these
                                                    courses may be within your budget; make sure to ask the
                                                    consultant about price comparison between various
                                                    universities.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question5"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question5"
                                    >
                                        <div className="date">Q.5</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>What requirements do I need to fulfill?</h2>
                                            <div className="collapse" id="question5">
                                                <p>
                                                    The colleges abroad have different requirements that
                                                    prospective students need to fulfil. You will have to
                                                    submit letters of recommendation, statement of purpose or
                                                    some on-job work experience might also be required. Since
                                                    the requirements of all the courses are different, you
                                                    will have to customize your application accordingly. Be
                                                    clear from the beginning about what documents need to be
                                                    submitted.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question6"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question6"
                                    >
                                        <div className="date">Q.6</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>Are there any scholarships available?</h2>
                                            <div className="collapse" id="question6">
                                                <p>
                                                    There are many scholarships funded by the college and
                                                    independent corporations for international students to
                                                    enable them to study without worrying about the costs
                                                    incurred. If you are eligible for such scholarships you
                                                    should ask the consultant beforehand. Many scholarships
                                                    require you to sit for an entrance test and for some
                                                    scholarships your application is automatically considered.
                                                    So in case any additional preparation is required, you
                                                    should know the details and complete information.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question7"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question7"
                                    >
                                        <div className="date">Q.7</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>How long can I stay abroad?</h2>
                                            <div className="collapse" id="question7">
                                                <p>
                                                    Many times the students are not clear about what their
                                                    student visa will permit them to do once the course is
                                                    over; can they stay back for a few more months or do they
                                                    need to take flight back home immediately. At the research
                                                    stage, your consultant should give you a clear idea about
                                                    your student visa and its regulations. If you are allowed
                                                    to work for a particular hour then the consultant should
                                                    mention it to you and tell you about the legal
                                                    consequences if you don’t follow those. The idea is to
                                                    have clear expectations about job opportunities before
                                                    starting the course.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question8"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question8"
                                    >
                                        <div className="date">Q.8</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>Which countries are suitable for Indian students?</h2>
                                            <div className="collapse" id="question8">
                                                <p>
                                                    One of the questions to ask your study abroad consultants
                                                    is the list of countries that offer benefits to foreign
                                                    students. Canada, Australia, the US, and the UK are some
                                                    of the countries that have many Indian students. Nowadays,
                                                    Germany, France, and Singapore are also chosen by foreign
                                                    students for higher studies. Note that the decision to
                                                    choose the country in which a student wants to follow
                                                    their academic pursuits will depend on the availability of
                                                    courses and other factors like the cost of studying,
                                                    living expenses, and university rules and regulations.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question9"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question9"
                                    >
                                        <div className="date">Q.9</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>
                                                What are the factors to consider before planning to study
                                                abroad?
                                            </h2>
                                            <div className="collapse" id="question9">
                                                <p>
                                                    There are some points to consider before planning to study
                                                    abroad. Some of the questions to ask a study abroad
                                                    advisor are the availability of course, total fees and
                                                    expenditures, scholarships, visa rules, placement and job
                                                    opportunities.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question10"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question10"
                                    >
                                        <div className="date">Q.10</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>
                                                Will the course I decide to pursue be accepted in India or
                                                other countries?
                                            </h2>
                                            <div className="collapse" id="question10">
                                                <p>
                                                    Many times courses may need additional validation to be
                                                    accepted in any country. The terms and conditions for
                                                    courses vary from country to country. One of the questions
                                                    to ask your study abroad consultants is what are the rules
                                                    pertaining to your particular course.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question11"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question11"
                                    >
                                        <div className="date">Q.11</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>What Are the Documents Required to Study Abroad?</h2>
                                            <div className="collapse" id="question11">
                                                <p>
                                                    Studying abroad requires a lot of documentation for visa
                                                    and university applications. Some of the basic documents
                                                    required are: <br />
                                                    Birth certificate
                                                    <br />
                                                    10+2+graduation certificate
                                                    <br />
                                                    Postgraduate certificate (if applicable)
                                                    <br />
                                                    Visa
                                                    <br />
                                                    Passport
                                                    <br />
                                                    Proof of funds
                                                    <br />
                                                    Medical certificate
                                                    <br />
                                                    Recommendation letters
                                                    <br />
                                                    Essays
                                                    <br />
                                                    Curriculum Vitae
                                                    <br />
                                                    Entrance examination results among other important
                                                    documents required by the country or university
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question12"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question12"
                                    >
                                        <div className="date">Q.12</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>
                                                Can I Speak to Other Students in The University Before
                                                Applying?
                                            </h2>
                                            <div className="collapse" id="question12">
                                                <p>
                                                    Many universities and colleges have public websites for
                                                    viewing. These websites have private student chat forums.
                                                </p>
                                                <p>
                                                    It is possible to log into these chat forums and speak
                                                    with other students to gain an insight into the college
                                                    programs for foreign students.
                                                </p>
                                                <p>
                                                    You can even speak with the administration of the college
                                                    through our expert as well know the easy process, for
                                                    further details.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question13"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question13"
                                    >
                                        <div className="date">Q.13</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>Do I Need a Study Abroad Consultant?</h2>
                                            <div className="collapse" id="question13">
                                                <p>
                                                    The most obvious answer to this question would be Yes. A
                                                    study abroad consultant has knowledge and expertise
                                                    concerning procedures and country rules.
                                                </p>
                                                <p>
                                                    Study abroad consultants also have agents in various
                                                    countries that can guide you upon your arrival in the
                                                    country.
                                                </p>
                                                <p>
                                                    Apart from easing the procedures upon your arrival in an
                                                    alien country, Study abroad advisors also know about
                                                    available scholarships and educational loans.
                                                </p>
                                                <p>
                                                    Appointing a certified consultant can provide a
                                                    hassle-free study abroad experience.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question14"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question14"
                                    >
                                        <div className="date">Q.14</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>
                                                Basic questions to ask at the Beginning ( about Courses,
                                                Country, Universities).
                                            </h2>
                                            <div className="collapse" id="question14">
                                                <p>What are the qualifications required to apply?</p>
                                                <p>Which Country is Better to Study Abroad?</p>
                                                <p>How Difficult are Study Abroad Courses?</p>
                                                <p>
                                                    When should I start the process to apply to universities
                                                    abroad?
                                                </p>
                                                <p>How long does the admission process take?</p>
                                                <p>How long can I stay abroad?</p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question15"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question15"
                                    >
                                        <div className="date">Q.15</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>Basic questions to ask about the admission process.</h2>
                                            <div className="collapse" id="question15">
                                                <p>What are the documents required to Study Abroad?</p>
                                                <p>Can I change my course after taking admission?</p>
                                                <p>Which Intake I Choose to Study Abroad?</p>
                                                <p>Can I work while studying abroad?</p>
                                                <p>What if I get rejected?</p>
                                                <p>Will I get a job after completing my studies?</p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data-bs-toggle="collapse"
                                        href="#question16"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="question16"
                                    >
                                        <div className="date">Q.16</div>
                                        <div className="date-inner">
                                            <img
                                                className="date-flag"
                                                src="images/date-icon.webp"
                                                alt=""
                                            />
                                            <h2>Basic questions about cost and expenses.</h2>
                                            <div className="collapse" id="question16">
                                                <p>How should I manage my finances?</p>
                                                <p>How much will the course cost?</p>
                                                <p>Are there any Scholarships available?</p>
                                                <p>Can studying abroad be expensive?</p>
                                            </div>
                                        </div>
                                        <div className="date-action">
                                            <div className="btn btn-primary">
                                                <span>Answer</span>{" "}
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </a>
                                </li>
                                <div className="clearfix" />
                            </ul>
                        </div>
                    </section>
                    <section className="image-grid lightgrey">
                        <div className="heading_color heading pad10 mt-3">
                            <h2>Our Recent Visa Approved Students</h2>
                        </div>
                        <div className="sector_list">
                            <ul>
                                <li>
                                    <img src="images/visa-1.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-2.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-3.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-4.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-5.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-6.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-7.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-8.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-9.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-10.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-11.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-12.webp" alt="" />
                                </li>
                                <li>
                                    <img src="images/visa-13.webp" alt="" />
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="country lightgrey">
                        <div className="heading_color heading pad10 ">
                            <h2>Countries &amp; Universities We Partner With</h2>
                        </div>
                        <div className="sector_list">
                            <ul>
                                <li>
                                    <img src="images/cananda.webp" alt="" />
                                    <h6 className="text-center">Canada</h6>
                                </li>
                                <li>
                                    <img src="images/austrila.webp" alt="" />
                                    <h6 className="text-center">Australia</h6>
                                </li>
                                <li>
                                    <img src="images/usa.webp" alt="" />
                                    <h6 className="text-center">USA</h6>
                                </li>
                                <li>
                                    <img src="images/uk.webp" alt="" />
                                    <h6 className="text-center">U.K</h6>
                                </li>
                                <li>
                                    <img src="images/germany.webp" alt="" />
                                    <h6 className="text-center">Germany</h6>
                                </li>
                                <li>
                                    <img src="images/newzealand.webp" alt="" />
                                    <h6 className="text-center">New Zealand</h6>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="reviews heading_color d-none">
                        <ul>
                            <li>
                                Are you Struggling for getting Qualified Leads for your business?
                            </li>
                            <li>You are not getting Return on Investment on Google Ads?</li>
                            <li>Do you find that your keywords are very expensive?</li>
                            <li>
                                Have you worked with “Google Ad Agency” and lost your huge ad budget
                                without any result?
                            </li>
                            <li>Are you losing money on Google Ads?</li>
                            <li>
                                Are you tired of working with Freelancers &amp; other companies, who
                                don’t deliver results, and know only “limited things” about Google
                                Ads?
                            </li>
                            <li>
                                Are you not sure if the “Google Ads Agency” knows the right way
                                &amp; techniques to improve your business sales?
                            </li>
                            <li>
                                Do your competitors eat away your share of the market through Google
                                Ads?
                            </li>
                            <li>
                                Does your current “Google Ads Agency” fail to deliver you results?
                            </li>
                            <li>
                                Are you tired of managing Google Ads in-house and getting poor
                                conversions, loss of money &amp; time?
                            </li>
                            <li>
                                Are you managing your Google Ads on your own and finds no time and
                                energy to optimize them?
                            </li>
                            <li>
                                Are you worried about your campaign’s poor quality score? A Lower
                                quality score can increase your cost per click up to 10 times.
                            </li>
                            <li>
                                Are you managing your “Negative Keywords” working on a “Search Term
                                Report” to control irrelevant clicks?
                            </li>
                            <li>Are your ads getting disapproved again &amp; again?</li>
                            <li>Are your accounts getting suspended again &amp; again?</li>
                            <li>
                                <b>Book Your Free Consultancy. Enjoy the never-ending growth.</b>
                            </li>
                            <div className="clearfix" />
                        </ul>
                    </section>
                    <section className="request_form lightgrey">
                        <div className="heading_color heading pad10 ">
                            <h2>LET US CONTACT YOU</h2>
                        </div>
                        <p className="text-center mt-1 mb-0">
                            Let's talk about your study abroad options!
                        </p>
                        <form action="mail2.php" method="post">
                            <div className="row pad50">
                                <div className="col-sm-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Your Name"
                                        required=""
                                    />
                                </div>
                                <div className="col-sm-3">
                                    <input
                                        type="tel"
                                        className="form-control noword"
                                        minLength={10}
                                        maxLength={10}
                                        onkeypress="return /[0-9a-zA-Z]/i.test(event.key)"
                                        name="phone"
                                        placeholder="Contact Number"
                                        required=""
                                    />
                                </div>
                                <div className="col-sm-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="city"
                                        placeholder="Your City"
                                        required=""
                                    />
                                </div>
                                <div className="col-sm-3">
                                    <input
                                        type="submit"
                                        className="form-control btn btn-primary"
                                        name="submit"
                                        defaultValue="Submit & Get A Call Back "
                                    />
                                </div>
                            </div>
                        </form>
                        <p className="text-center pb-2">
                            Get expert advice on studying abroad and Unlock Study Abroad
                            Opportunities
                        </p>
                    </section>
                    <section className="benfits lightgrey">
                        <div className="heading_color heading pad10 ">
                            <h2>OUR SERVICES</h2>
                        </div>
                        <div className="benfit_ponts pad50">
                            <ul>
                                <li>Education Counselling</li>
                                <li>Education</li>
                                <li>Visa Services</li>
                                <li>Guaranteed Admission</li>
                                <li>Safety &amp; Insurance</li>
                                <li>Country Information</li>
                                <li>Any Emergency Assistance</li>
                                <li>Test Preparation Training</li>
                                <li>Scholarship Assistance</li>
                                <li>Selection of Course</li>
                                <li>Admission Guidance</li>
                                <li>Financial Estimation</li>
                                <li>Abroad Accommodation</li>
                                <li>Travel Guidance</li>
                                <li>Sim card Arrangements</li>
                                <li>Invitation Letter &amp; Other</li>
                                <li>Opening Bank Account</li>
                                <li>Regular Feedback To Parents</li>
                                <li>Assistance in foreign exchanges.</li>
                                <li>Advance booking of Hostel Rooms.</li>
                                <li>Overseas Education loan assistance</li>
                                <li>Travel arrangements from Delhi to University Campus.</li>
                                <li>Airport Pickup, Hotel Arrangement &amp; Other Services</li>
                                <li>Assistance &amp; Guidance During the Course of Study</li>
                                <div className="clearfix" />
                            </ul>
                        </div>
                    </section>
                    <section className="cities lightgrey">
                        <div className="heading_color heading pad10 ">
                            <h2>
                                We helped our students achieve their dream of studying abroad in
                                these locations.
                            </h2>
                        </div>
                        <div className="cities_list pad50">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link active"
                                        id="delhi-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#delhi"
                                        role="tab"
                                        aria-controls="delhi"
                                        aria-selected="true"
                                    >
                                        Delhi
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="noida-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#noida"
                                        role="tab"
                                        aria-controls="noida"
                                        aria-selected="false"
                                    >
                                        Noida
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="Gurugram-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Gurugram"
                                        role="tab"
                                        aria-controls="Gurugram"
                                        aria-selected="false"
                                    >
                                        Gurugram
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="Ghaziabad-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Ghaziabad"
                                        role="tab"
                                        aria-controls="Ghaziabad"
                                        aria-selected="false"
                                    >
                                        Ghaziabad
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="GreaterNoida-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#GreaterNoida"
                                        role="tab"
                                        aria-controls="GreaterNoida"
                                        aria-selected="false"
                                    >
                                        Greater Noida
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="Faridabad-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Faridabad"
                                        role="tab"
                                        aria-controls="Faridabad"
                                        aria-selected="false"
                                    >
                                        Faridabad
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="Mumbai-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Mumbai"
                                        role="tab"
                                        aria-controls="Mumbai"
                                        aria-selected="false"
                                    >
                                        Mumbai
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="Bangalore-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Bangalore"
                                        role="tab"
                                        aria-controls="Bangalore"
                                        aria-selected="false"
                                    >
                                        Bangalore
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="Chandigarh-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Chandigarh"
                                        role="tab"
                                        aria-controls="Chandigarh"
                                        aria-selected="false"
                                    >
                                        Chandigarh
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="Chennai-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Chennai"
                                        role="tab"
                                        aria-controls="Chennai"
                                        aria-selected="false"
                                    >
                                        Chennai
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="Kolkata-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Kolkata"
                                        role="tab"
                                        aria-controls="Kolkata"
                                        aria-selected="false"
                                    >
                                        Kolkata
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="Hyderabad-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Hyderabad"
                                        role="tab"
                                        aria-controls="Hyderabad"
                                        aria-selected="false"
                                    >
                                        Hyderabad
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="Ahmedabad-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Ahmedabad"
                                        role="tab"
                                        aria-controls="Ahmedabad"
                                        aria-selected="false"
                                    >
                                        Ahmedabad
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className="nav-link"
                                        id="Pune-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Pune"
                                        role="tab"
                                        aria-controls="Pune"
                                        aria-selected="false"
                                    >
                                        Pune
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="delhi"
                                    role="tabpanel"
                                    aria-labelledby="delhi-tab"
                                >
                                    <ul>
                                        <li>Emporio Mall</li>
                                        <li>Punjabi Bagh</li>
                                        <li>Connaught Place</li>
                                        <li>Greater Kailash</li>
                                        <li>Select Citywalk Mall</li>
                                        <li>Dwarka</li>
                                        <li>South Extension</li>
                                        <li>Green Park</li>
                                    </ul>
                                    <ul id="delhishow" style={{ display: "none" }}>
                                        <li>Saket</li>
                                        <li>Shahpur Jat</li>
                                        <li>Vasnat Vihar</li>
                                        <li>Pitampura</li>
                                        <li>DLF Avenue</li>
                                        <li>Vasant Kunj</li>
                                        <li>Model Towm</li>
                                        <li>Rohini</li>
                                        <li>Jor Bhag</li>
                                        <li>Netaji Subhash Place</li>
                                        <li>Lajpat Nagar</li>
                                        <li>Pacific Mall</li>
                                        <li>Mehrauli Market</li>
                                        <li>Karol Bhag</li>
                                        <li>Rajouri Garden</li>
                                        <li>Hauz Khas</li>
                                        <li>Khan Market</li>
                                    </ul>
                                    <button id="delhimore" onclick="delhimore()">
                                        Show More
                                    </button>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="noida"
                                    role="tabpanel"
                                    aria-labelledby="noida-tab"
                                >
                                    <ul>
                                        <li>DLF Mall of India</li>
                                        <li>Sector 18</li>
                                        <li>Sector 55</li>
                                        <li>Sector 27</li>
                                        <li>The Great Inida Place</li>
                                        <li>Sector 15</li>
                                        <li>Sector 22</li>
                                        <li>Sector 75</li>
                                    </ul>
                                    <ul id="noidashow" style={{ display: "none" }}>
                                        <li>Sector 47</li>
                                        <li>Sector 19</li>
                                        <li>Sector 39</li>
                                        <li>Sector 44</li>
                                    </ul>
                                    <button id="noidamore" onclick="noidamore()">
                                        Show More
                                    </button>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Gurugram"
                                    role="tabpanel"
                                    aria-labelledby="Gurugram-tab"
                                >
                                    <ul>
                                        <li>Ambience Mall</li>
                                        <li>Golf Course</li>
                                        <li>South City</li>
                                        <li>DLF Phase 1</li>
                                        <li>DLF Galleria</li>
                                        <li>SS Hibiscus</li>
                                        <li>Golf Course</li>
                                        <li>DLF Phase 2</li>
                                    </ul>
                                    <ul id="gurugramshow" style={{ display: "none" }}>
                                        <li>Sector 47</li>
                                        <li>DLF Phase 3</li>
                                        <li>Sohna Road</li>
                                        <li>Sector 23</li>
                                        <li>DLF Phase 4</li>
                                        <li>Palam Vihar</li>
                                        <li>MG Road</li>
                                        <li>Sector 42</li>
                                        <li>Sector 57</li>
                                        <li>Sector 82</li>
                                    </ul>
                                    <button id="gurugrammore" onclick="gurugrammore()">
                                        Show More
                                    </button>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Ghaziabad"
                                    role="tabpanel"
                                    aria-labelledby="Ghaziabad-tab"
                                >
                                    <ul>
                                        <li>Kaushambi</li>
                                        <li>Indirapuram</li>
                                        <li>Vasundhara</li>
                                        <li>Crossing Republic</li>
                                        <li>Vaishali</li>
                                        <li>Habitat centre</li>
                                        <li>Raj Nagar</li>
                                        <li>Ramprastha</li>
                                    </ul>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="GreaterNoida"
                                    role="tabpanel"
                                    aria-labelledby="GreaterNoida-tab"
                                >
                                    <ul>
                                        <li>The Grand Venice Mall</li>
                                        <li>Rise Resorts Residence</li>
                                        <li>Omaxe Palm Greens</li>
                                        <li>Purvanchal Royal City</li>
                                        <li>Experience Vana</li>
                                        <li>Jaypee Greens</li>
                                        <li>Paramount Golf Forest</li>
                                        <li>Ashiana Black Gold</li>
                                        <li>ATS Greens Paradiso</li>
                                    </ul>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Faridabad"
                                    role="tabpanel"
                                    aria-labelledby="Faridabad-tab"
                                >
                                    <ul>
                                        <li>Ashoka Road</li>
                                        <li>Springfield Colony</li>
                                        <li>Sector 9</li>
                                        <li>Sector 15</li>
                                        <li>Surajkund</li>
                                        <li>Greenfield Colony</li>
                                        <li>Sector 11</li>
                                        <li>Sector 19</li>
                                        <li>Sector 13.3</li>
                                    </ul>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Mumbai"
                                    role="tabpanel"
                                    aria-labelledby="Mumbai-tab"
                                >
                                    <ul>
                                        <li>Viviana Mall</li>
                                        <li>High Street Phoenix Mall</li>
                                        <li>Colaba</li>
                                        <li>Palladium Mall</li>
                                        <li>Phoenix Marketcity Mall</li>
                                        <li>Linking Road</li>
                                        <li>Kemps Corner</li>
                                        <li>Bandra</li>
                                    </ul>
                                    <ul id="mumbaishow" style={{ display: "none" }}>
                                        <li>Marine Drive</li>
                                        <li>Malabar Hill</li>
                                        <li>Cuffe Parade</li>
                                        <li>Powai</li>
                                        <li>Cumballa Hill</li>
                                        <li>Juhu</li>
                                        <li>Tardeo</li>
                                        <li>Lokhandwala</li>
                                        <li>Infiniti Mall Mumbai</li>
                                        <li>Altamount &amp; Peddar Road</li>
                                        <li>Palli hill</li>
                                        <li>Breach Candy</li>
                                        <li>Worli, Sea Face</li>
                                        <li>Versova</li>
                                        <li>Altamount Road</li>
                                        <li>Mahim</li>
                                    </ul>
                                    <button id="mumbaimore" onclick="mumbaimore()">
                                        Show More
                                    </button>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Bangalore"
                                    role="tabpanel"
                                    aria-labelledby="Bangalore-tab"
                                >
                                    <ul>
                                        <li>Phoenix Marketcity Mall</li>
                                        <li>Orion Mall</li>
                                        <li>Lavelle Road</li>
                                        <li>Indira Nagar</li>
                                        <li>Mantri Square Mall</li>
                                        <li>UB City Mall</li>
                                        <li>Lulu Global Mall</li>
                                        <li>Basavanagudi</li>
                                    </ul>
                                    <ul id="bangaloreshow" style={{ display: "none" }}>
                                        <li>Benson Town</li>
                                        <li>Koramangala</li>
                                        <li>Richmond Town</li>
                                        <li>Jayanagar</li>
                                        <li>Cooke Town</li>
                                        <li>Malleswaram</li>
                                        <li>RMV Extension</li>
                                        <li>Frazer town</li>
                                        <li>Lavelle Road</li>
                                        <li>Rajajinagar</li>
                                        <li>Ulsoor or Halasuru</li>
                                        <li>Sadashivanagar</li>
                                        <li>Ulsoor</li>
                                    </ul>
                                    <button id="bangaloremore" onclick="bangaloremore()">
                                        Show More
                                    </button>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Chandigarh"
                                    role="tabpanel"
                                    aria-labelledby="Chandigarh-tab"
                                >
                                    <ul>
                                        <li>Elante Mall</li>
                                        <li>Sector 5</li>
                                        <li>Sector 10</li>
                                        <li>Sector 9</li>
                                        <li>Sector 8</li>
                                        <li>Sector 33</li>
                                        <li>Sector 16</li>
                                        <li>Sector 11</li>
                                        <li>Sector 17</li>
                                        <li>Sector 45</li>
                                        <li>Sector 69</li>
                                    </ul>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Chennai"
                                    role="tabpanel"
                                    aria-labelledby="Chennai-tab"
                                >
                                    <ul>
                                        <li>Phoenix Marketcity Mall</li>
                                        <li>Express Avenue Mall</li>
                                        <li>Boat Club</li>
                                        <li>Nungambakkam</li>
                                        <li>VR Mall Mall</li>
                                        <li>Palladium Mall</li>
                                        <li>Poes Garden</li>
                                        <li>Besant Nagar</li>
                                    </ul>
                                    <ul id="chennaishow" style={{ display: "none" }}>
                                        <li>Adyar</li>
                                        <li>Kotturpuram</li>
                                        <li>Gopalapuram</li>
                                        <li>Teynampet</li>
                                        <li>Velachery</li>
                                        <li>East Coast Road</li>
                                    </ul>
                                    <button id="chennaimore" onclick="chennaimore()">
                                        Show More
                                    </button>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Kolkata"
                                    role="tabpanel"
                                    aria-labelledby="Kolkata-tab"
                                >
                                    <ul>
                                        <li>Park Street</li>
                                        <li>South City Mall</li>
                                        <li>Orbit Victoria</li>
                                        <li>Woodburn Central Mall</li>
                                        <li>Camac Street</li>
                                        <li>Ballygunge</li>
                                        <li>Quest Mall</li>
                                        <li>Alipore</li>
                                    </ul>
                                    <ul id="kolkatashow" style={{ display: "none" }}>
                                        <li>New Alipore</li>
                                        <li>Rajarhat Newtown</li>
                                        <li>Bhowanipore</li>
                                        <li>Salt Lake</li>
                                        <li>Gariahat</li>
                                    </ul>
                                    <button id="kolkatamore" onclick="kolkatamore()">
                                        Show More
                                    </button>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Hyderabad"
                                    role="tabpanel"
                                    aria-labelledby="Hyderabad-tab"
                                >
                                    <ul>
                                        <li>Sarath City Capital Mall</li>
                                        <li>Banjara Hills</li>
                                        <li>Gachibowli</li>
                                        <li>Abids</li>
                                        <li>Jubilee Hills</li>
                                        <li>Hitech City</li>
                                        <li>Manikonda</li>
                                        <li>Kondapur</li>
                                    </ul>
                                    <ul id="hyderabadshow" style={{ display: "none" }}>
                                        <li>KothaGuda</li>
                                        <li>Miyapur</li>
                                        <li>Uppal</li>
                                        <li>Narsingi</li>
                                        <li>KBR Park Road Area</li>
                                        <li>Nallagandla</li>
                                        <li>Begumpet</li>
                                        <li>Kukatpally</li>
                                    </ul>
                                    <button id="hyderabadmore" onclick="hyderabadmore()">
                                        Show More
                                    </button>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Ahmedabad"
                                    role="tabpanel"
                                    aria-labelledby="Ahmedabad-tab"
                                >
                                    <ul>
                                        <li>Alpha One Mall</li>
                                        <li>Satellite</li>
                                        <li>SG Highway</li>
                                        <li>Sindhu Bhavan</li>
                                        <li>Thaltej</li>
                                        <li>Bodakdev</li>
                                        <li>Science City</li>
                                        <li>Navrangpura</li>
                                    </ul>
                                    <ul id="ahmedabadshow" style={{ display: "none" }}>
                                        <li>Ambli Bopal Road</li>
                                        <li>Central Ahmedabad</li>
                                        <li>Prahlad Nagar</li>
                                        <li>Chandkheda</li>
                                    </ul>
                                    <button id="ahmedabadmore" onclick="ahmedabadmore()">
                                        Show More
                                    </button>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Pune"
                                    role="tabpanel"
                                    aria-labelledby="Pune-tab"
                                >
                                    <ul>
                                        <li>Kalyani Nagar</li>
                                        <li>Shivaji Nagar</li>
                                        <li>Boat Club Road</li>
                                        <li>Wadgaon Sheri</li>
                                        <li>Eran Dwane</li>
                                        <li>Koregaon Park</li>
                                        <li>Kothrud</li>
                                        <li>Senapati Bapat Road</li>
                                    </ul>
                                    <ul id="puneshow" style={{ display: "none" }}>
                                        <li>Model Colony</li>
                                        <li>Sopan Baug</li>
                                        <li>Magarpatta</li>
                                    </ul>
                                    <button id="punemore" onclick="punemore()">
                                        Show More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="location lightgrey pad20">
                        <div className="container">
                            <h3>Our Address</h3>
                            <p>
                                Consigner Overseas Education Pvt. Ltd. <br />
                                Near - Maharaja Banquet Hall <br />
                                36 – B, Second Floor, <br />
                                Nirman Vihar,
                                <br />
                                Delhi – 110092
                                <br />
                                Landmark - Opposite of V3S Mall
                            </p>
                        </div>
                    </div>
                    <div className="copyright heading_color text-center pad10">
                        <p className="whitetext mb-0">©2023 . All Right Reserved.</p>
                        {/* <button id="reset">Reset</button> */}
                    </div>
                </main>
            </div>
            <footer>
                <div className="btn_fixed d-md-none">
                    <a href="tel:9811370058">
                        <i className="fa fa-phone" aria-hidden="true" /> Call Us
                    </a>
                    <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#getrequestquote"
                    >
                        <i className="fa fa-envelope-o" aria-hidden="true" /> Get A Callback
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=+919205040600&text=Hello"
                        target="_blank"
                    >
                        <i className="fa fa-whatsapp" aria-hidden="true" /> Whatsapp
                    </a>
                </div>
                <div
                    className="modal fade"
                    id="getrequestquote"
                    tabIndex={-1}
                    aria-labelledby="getrequestquoteLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Get A Request
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <form action="mail2.php" method="post">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Your Name"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control noword"
                                            minLength={10}
                                            maxLength={10}
                                            onkeypress="return /[0-9a-zA-Z]/i.test(event.key)"
                                            placeholder="Contact Number"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="city"
                                            className="form-control"
                                            placeholder="Your City"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            className="form-control btn btn-primary"
                                            name="submit"
                                            defaultValue="Submit & Get A Call Back "
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="reviewone" className="review">
                <button id="closeone" className="close">
                    Close
                </button>
                <h4>Exclusive Fee Waiver</h4>
                <hr />
                <p>
                    Most of the universities/ colleges offer discounts or waivers in the
                    application fee for the admissions direct students.
                </p>
            </div>
            <div id="reviewtwo" className="review">
                <button id="closetwo" className="close">
                    Close
                </button>
                <h4>Common types of fraud includes</h4>
                <hr />
                <div className="benfit_ponts">
                    <ul>
                        <li>
                            Many Indian students want to study abroad for higher education, but
                            scams related to it are becoming more common. Students are often not
                            familiar with the complicated process and are easy targets for fraud
                            agents. To avoid being cheated, you can read about past scams by study
                            abroad agents and learn how to stay alert and avoid dishonest schemes.
                            This article will help you do just that.
                        </li>
                        <li>
                            Agents send students to non-recognized universities. Make sure to
                            check that the university/college you are applying to is a recognized
                            institution by the concerned authority of that country.
                        </li>
                        <li>
                            Many times the agents submit fake academic or bank documents to the
                            embassy/college leading to blacklisting of that candidate later on.{" "}
                        </li>
                        <li>
                            Always check the validity or accreditation of the course you are
                            applying to. Check whether you will be getting a valid degree and
                            whether you will be able to get a permanent job after completing your
                            studies or not.
                        </li>
                        <li>
                            <b>Guaranteed Visa:</b> Never fall prey to fraud agents by giving them
                            money in exchange for guaranteed admission or visa. Agents make false
                            claims to students that they can assure visas to them with their links
                            in the embassy. Here, aspirants should know that the Embassy of the
                            concerned country is the only authority that can issue a visa (Student
                            Visa) to students and no agent can do that.
                        </li>
                        <li>
                            Always check all necessary details related to fee, accommodation or
                            on-campus work and other facilities on the official website of the
                            college/university and don’t go simply by what the agents are
                            claiming. Agents can misguide students about all these details.
                        </li>
                        <li>
                            Beware of agents who promise guaranteed admission as officially they
                            are not authorised to provide admissions to students. It is always the
                            admissions committee that is selected by the college/university that
                            has the authority to give admission or reject the application. Also,
                            note that universities always inform the students about the status of
                            their application whether accepted or rejected.
                        </li>
                        <div className="clearfix" />
                    </ul>
                </div>
            </div>
            <div id="reviewthree" className="review">
                <button id="closethree" className="close">
                    Close
                </button>
                <h4>Registered Member of CICC</h4>
                <hr />
                <div className="benfit_ponts">
                    <ul>
                        <li>CICC - College of Immigration and Citizenship Consultants</li>
                        <li>
                            A Registered member of the College of Immigration and Citizenship
                            Consultants is licensed to provide immigration and citizenship
                            consulting services in Canada.
                        </li>
                        <li>
                            They are bound by a code of ethics and professional conduct and are
                            subject to investigation and disciplinary action if necessary.
                        </li>
                        <li>
                            Registered members provide assistance, advice, and representation to
                            students on study visa, immigration, and citizenship matters.
                        </li>
                        <div className="clearfix" />
                    </ul>
                </div>
            </div>
        </>

    )
}
