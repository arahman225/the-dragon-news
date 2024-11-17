import moment from 'moment/moment';
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div>
            <div className='flex items-center flex-col justify-center space-y-4'>
                <div className="logo mt-6">
                    <img className='w-[300px]' src={logo} alt="" />
                </div>
                <div className='text-center'>
                    <h3 className='text-gray-400'>Journalism Without Fear or Favour</h3>
                    <p>{moment().format('MMMM Do YYYY')}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;