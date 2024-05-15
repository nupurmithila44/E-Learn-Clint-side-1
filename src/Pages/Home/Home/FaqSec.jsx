

const FaqSec = () => {
    return (
        <div>
            <div>
                <h1 className="lg:text-4xl font-bold text-center mt-20 mb-7">our Best Features</h1>
                <div className="w-[300px] lg:w-[700px] mx-auto">
                    <p className="text-base font-semibold ">Here’s an example of the use of “why” instead of offering a yes/no question. People will wonder what online learning can do for them and rather than telling them whether or not they can benefit, you’re explaining how everyone can benefit from online learning when they do it properly</p>
                </div>
                <section className="dark:bg-gray-100 dark:text-gray-800 px-7 my-10">
                    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                        <h2 className="text-2xl font-extrabold sm:text-4xl ">What is online learning like?</h2>
                        <p className="mt-4 mb-8 dark:text-gray-600">For those who have never encountered online learning, the biggest question is often what it is actually like. The caveat, as you know, is that online learning comes in several forms. Therefore, this is your chance to explain that to people. Point out that there are different types of online courses and programs, and that they’ll have to decide which is best for them.</p>
                        <div className="space-y-4">
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-bold text-2xl">Can I learn at my own pace?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">This is another common question that people have about online courses. There are usually self-paced programs and traditional classroom or meeting-style programs available. Today’s world is full of busy people that want to better themselves, so the self-paced programs are popular. Whether or not you provide this option, be sure to answer this question for people and explain the pros and cons of each type of learning. As a bonus, you can even invite them to contact you for more information or to discuss what their options are </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-bold text-2xl">Are you accredited or licensed by educational organizations?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">There isn’t always a need for licensing or accreditation for online courses. However, some programs do require it. Either way, people will usually ask what type of training or background you have, as well as any licensing that’s available if that’s relevant. Make sure that you answer this question by telling them if you do hold any licenses or accreditation, as well as by explaining whether or not those are needed, and why. It gives them the confidence that you have the right experience and boosts your credibility because you’re offering additional information for the sake of education alone.</p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 font-bold text-2xl">What types of assignments do you give?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Like knowing the format of online learning, people often want to know the type of work they’ll be doing when they take online courses. Be sure to provide a glimpse of what you offer here and link to previous projects or assignments if you can. You can also link to course or program pages. As long as you explain to people how the courses are taught and what they can expect in terms of coursework, you’ll be helping them make a better decision about their educational needs.  </p>
                            </details>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default FaqSec;