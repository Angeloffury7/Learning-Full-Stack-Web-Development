function ContactInfo({ contact }) {
    const {email, phone, address} = contact;

    return (
        <div className="ContactInfo">
            {email} | {phone} | {address}
        </div>
    );
}

export default ContactInfo;
