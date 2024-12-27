import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <header className="position-relative text-center">
            <div className="position-relative d-inline-block">
                <img 
                    src="/images/profile-picture.png" 
                    alt="Profile Picture" 
                    className="img-fluid"
                />
                <h1 
                    className="position-absolute bottom-0 start-50 translate-middle text-white fw-bold"
                    style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}
                >
                    Josh Harris
                </h1>
            </div>
        </header>
    );
};

export default Header;