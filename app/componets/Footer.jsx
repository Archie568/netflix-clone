

function Footer() {
    return (
        <footer className=" bg-black text-gray-400 " >
            <div className="p-2 container mx-auto" >
            <div className="mb-10 text-gray-400" >
                Questions? Call <a className=" underline" href="tell:0 801-000-723">0 801-000-723</a>
            </div>
                <ul className="grid mx-auto grid-cols-2 lg:grid-cols-4 underline text-sm pb-6" >
                    <li className=" pb-2 text-gray-400 " >FAQ</li>
                    <li className=" pb-2 text-gray-400 " >Help Center</li>
                    <li className=" pb-2 text-gray-400 " >Account</li>
                    <li className=" pb-2 text-gray-400 " >Media Center</li>
                    <li className=" pb-2 text-gray-400 " >Investor Relations</li>
                    <li className=" pb-2 text-gray-400 " >Jobs</li>
                    <li className=" pb-2 text-gray-400 " >Redeem Gift Cards</li>
                    <li className=" pb-2 text-gray-400 " >Buy Gift Cards</li>
                    <li className=" pb-2 text-gray-400 " >Ways to Watch</li>
                    <li className=" pb-2 text-gray-400 " >Terms of Use</li>
                    <li className=" pb-2 text-gray-400 " >Privacy</li>
                    <li className=" pb-2 text-gray-400 " >Cookie Preferences</li>
                    <li className=" pb-2 text-gray-400 " >Corporate Information</li>
                    <li className=" pb-2 text-gray-400 " >Contact Us</li>
                    <li className=" pb-2 text-gray-400 " >Speed Test</li>
                    <li className=" pb-2 text-gray-400 " >Legal Notices</li>
                    <li className=" pb-2 text-gray-400 " >Only on Netflix</li>
                </ul>
                <div className="pb-10" >
                    <select className=" bg-black border border-gray-400 rounded-sm px-5 py-1 border-1 text-gray-300" >
                        <option className="" value="English">English</option>
                    </select>
                </div>
                <div className=" text-gray-400 pb-20" >
                    Netflix South Africa
                </div>
            </div>
        </footer>
    )
}

export default Footer
