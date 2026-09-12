import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" href="/">LARAVEL + INERTIA.JS</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/posts/">POSTS</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://santrikoding.com/ebook" target="_blank" rel="noopener noreferrer">EBOOK</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://santrikoding.com/tutorial-set" target="_blank" rel="noopener noreferrer">TUTORIAL SET</a>
                                </li>
                            </ul>
                            
                            <div className="d-flex gap-2">
                                {auth?.user ? (
                                    <Link href="/dashboard" className="btn btn-outline-light">
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link href="/login" className="btn btn-success">
                                            Log in
                                        </Link>
                                        <Link href="/register" className="btn btn-outline-light">
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mt-5">
                <div style={{ marginTop: '100px' }}>
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
                </div>
            </main>
        </>
    );
}
