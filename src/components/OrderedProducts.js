import moment from "moment"
import Currency from "react-currency-formatter";

const OrderedProducts = ({ amount, amountShipping, items, timestamp, images }) => {
    function makeid(length) {
        var result = [];
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('');
    }

    return (
        <div className={" mb-6 shadow-xl dark:shadow-none rounded-2xl "}>
            <div className="rounded-tl-2xl flex items-center space-x-10 p-5 bg-gray-200 text-sm text-gray-600 rounded-tr-2xl">
                <div>
                    <p className="font-bold text-xs">Order Placed</p>
                    <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
                </div>
                <div>
                    <p className="font-bold text-xs">Total</p>
                    <p>
                        <Currency quantity={amount} />
                    </p>
                </div>
                <div>
                    <p className="font-bold text-xs">Shipping Fee</p>
                    <p><Currency quantity={amountShipping} /></p>
                </div>

                <p className="text-sm whitespace-nowrap sm:text-base self-end flex-1 text-right text-blue-500">
                    {items?.length} {items.length === 1 ? "item" : "items"}
                </p>

            </div>

            <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto">
                    {images?.map((image) => (
                        <img src={image} alt="" className="h-20 object-contain sm:h-32" />))}
                </div>
            </div>
        </div>
    )
}

export default OrderedProducts
