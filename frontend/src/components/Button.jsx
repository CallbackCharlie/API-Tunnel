const Button = ({ styles, value }) => (
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-pink-gradient rounded-[10px] outline-none ${styles}`}>
        {value}
    </button>
);

export default Button;