
export default function CertificateCard({ title, image }) {
    return (
        <div className="rounded-xl overflow-hidden shadow-md bg-white">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
        </div>
    );
}
