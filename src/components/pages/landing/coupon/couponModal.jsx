import { useState, useEffect } from "react";
import { X } from "lucide-react";

function CouponModal() {
    const [valid, setValid] = useState(false);
    const [couponValue, setCouponValue] = useState('');

    const [modalClose, setModalClose] = useState(false);

    const handleCoupon = (e) => {
        setCouponValue(e.target.value);
    };

    const handleClose = (e) => {
        console.log(e.target.value);
        handleModal(e);
    };

    // 모달을 닫기만 하는 기능
    const handleModal = (e) => {
        setModalClose(true);
    };

    useEffect(() => {
        if (couponValue.length >= 10) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [couponValue]);

    return (
        <div className={`${modalClose ? 'hidden' : 'fixed'} z-40 top-0 left-0 flex items-center justify-center w-full h-full bg-pink-100/15 p-6 md:p-12 overflow-hidden`}>
            <div className="relative flex flex-col items-center justify-center w-full h-full bg-black/95 rounded-xl">
                {/* 모달 닫기 버튼 */}
                <button
                    className="group absolute top-4 right-4 rounded p-2 cursor-pointer"
                    onClick={(e) => handleClose(e)}
                >
                    <X className="text-white group-hover:text-red-500" />
                </button>

                {/* 모달 컨텐츠 */}
                <div className="flex flex-col max-w-sm gap-4">
                    {/* 헤더 블록 */}
                    <div>
                        <h2>쿠폰을 입력해주세요</h2>
                    </div>

                    {/* 쿠폰 블록 */}
                    <div>
                        <label className="block text-stone-300 mb-2" htmlFor="username"></label>
                        <input
                            id="username"
                            type="text"
                            placeholder="쿠폰"
                            value={couponValue}
                            onChange={handleCoupon}
                            className="w-full py-5 px-5 rounded-lg bg-stone-900 text-white focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
                        />
                    </div>

                    {/* 쿠폰 등록 버튼 */}
                    <button
                        className={`flex w-full text-center items-center justify-center ${valid
                            ? 'bg-red-400 hover:bg-red-500 text-white cursor-pointer'
                            : 'bg-stone-100/30 text-stone-400 !cursor-default'
                            } p-2 rounded-lg font-bold py-5 px-5`}
                        disabled={!valid}
                    // onClick={loginBtn}
                    >
                        {/* {isLoading ? <LoaderCircle className='animate-spin' /> : '로그인하기'} */}
                        쿠폰 등록
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CouponModal;