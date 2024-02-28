import Image from 'next/image';
import Marquee from "react-fast-marquee";

const Sponsor = () => {
    return (
        <div className='my-16'>
            <div className=''>
                <Marquee speed={ 100 } className='border-t border-b py-8'>
                    <Image width={ 200 } height={ 200 } className="mr-20" src="https://i.ibb.co/wKxntrs/sponsor1.webp" alt='sponsor image' />
                    <Image width={ 200 } height={ 200 } className="mr-20" src="https://i.ibb.co/X81SKyZ/sponsor2.webp" alt='sponsor image' />
                    <Image width={ 200 } height={ 200 } className="mr-20" src="https://i.ibb.co/72KPyp4/sponsor3.webp" alt='sponsor image' />
                    <Image width={ 200 } height={ 200 } className="mr-20" src="https://i.ibb.co/7Q4vV2d/sponsor4.webp" alt='sponsor image' />
                </Marquee>
            </div>
        </div>
    );
};

export default Sponsor;
