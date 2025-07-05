import { Link } from 'react-router-dom';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';

const ComingSoon = ({ title = "Coming Soon", returnPath = "/dashboard" }) => {


    return (
        <DashboardLayout
            title={title}
            breadcrumb={[
                { name: 'Home', href: '/dashboard' },
                { name: title }
            ]}
        >
            <Container>
                <div className="flex flex-col items-center justify-center py-16 px-4">
                    <div className="w-full max-w-md text-center">
                        <div className="inline-flex">
                            <img src="/static/img/template-logo2.png" alt="" srcset="" className='w-50 h-50' />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Coming Soon</h1>

                        <p className="text-lg text-gray-600 mb-8">
                            This page is currently under construction. Expect exciting updates soon!
                        </p>



                        <Link
                            href={returnPath}
                            className="inline-flex items-center text-blue-600 hover:text-blue-800"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Return to Dashboard
                        </Link>
                    </div>

                    <div className="w-full max-w-2xl mt-16">
                        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-blue-600 h-full rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                            <span>Development in progress</span>
                            <span>65% Complete</span>
                        </div>
                    </div>
                </div>
            </Container>
        </DashboardLayout>
    );
};

export default ComingSoon;