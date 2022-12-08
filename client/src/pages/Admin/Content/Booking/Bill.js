import { useEffect, useRef } from 'react';

function Bill({ billData }) {
    const ref = useRef();

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const padTo2Digits = (num) => {
        return num.toString().padStart(2, '0');
    };

    const formatDate = (date) => {
        return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join('/');
    };

    return (
        <div ref={ref} className="booking-bill-container">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col" colSpan="5" className="text-center">
                            Hóa đơn thanh toán
                        </th>
                    </tr>
                    <tr>
                        <th scope="col" colSpan="5">
                            <div className="d-flex table-row-header-custom">
                                <div className="w-50">Khách hàng/Cơ quan: {billData.customerList[0].name}</div>
                                <div className="w-50">Địa chỉ: {billData.address}</div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col" colSpan="5">
                            <div className="d-flex table-row-header-custom">
                                <div className="w-50">
                                    Ngày thanh toán: {formatDate(new Date(billData.dateOfPayment))}
                                </div>
                                <div className="w-50">Trị giá: {billData.totalAmount}</div>
                            </div>
                        </th>
                    </tr>
                    <tr className="table-dark">
                        <th scope="col" className="text-center">
                            STT
                        </th>
                        <th scope="col" className="text-center">
                            Phòng
                        </th>
                        <th scope="col" className="text-center">
                            Số ngày thuê
                        </th>
                        <th scope="col" className="text-center">
                            Đơn giá
                        </th>
                        <th scope="col" className="text-center">
                            Thành tiền
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="text-center" scope="row">
                            1
                        </th>
                        <th className="text-center">{billData.roomNumber}</th>
                        <th className="text-center">{billData.dateDiff}</th>
                        <th className="text-center">{billData.roomPrice}</th>
                        <th className="text-center">{billData.totalAmount}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Bill;
