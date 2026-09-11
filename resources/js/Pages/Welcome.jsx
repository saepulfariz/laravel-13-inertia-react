import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="container-fluid min-vh-100 d-flex flex-column bg-light text-dark p-4 p-lg-5">
                <header className="w-100 mx-auto" style={{ maxWidth: '800px' }}>
                    <nav className="d-flex justify-content-end gap-3 mb-4">
                        {auth?.user ? (
                            <Link
                                href="/dashboard"
                                className="btn btn-outline-dark"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="btn btn-light text-dark border-0"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/register"
                                    className="btn btn-outline-dark"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <div className="flex-grow-1 d-flex align-items-center justify-content-center w-100">
                    <main className="w-100 mx-auto" style={{ maxWidth: '800px' }}>
                        <div className="card shadow-sm border-0 rounded-3 p-4 p-lg-5 bg-white text-dark">
                            <h1 className="mb-2 fs-2 fw-semibold">Laravel + Inertia + React</h1>
                            <p className="mb-4 text-muted">
                                Welcome to your new application. You have successfully ported the welcome page to Inertia + React using Bootstrap 5.
                            </p>
                            
                            <ul className="list-unstyled d-flex flex-wrap gap-3 mt-4 mb-0">
                                <li>
                                    <a 
                                        href="https://laravel.com/docs" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn btn-dark"
                                    >
                                        Laravel Docs
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://inertiajs.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-dark"
                                    >
                                        Inertia Docs
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://react.dev" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-dark"
                                    >
                                        React Docs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
