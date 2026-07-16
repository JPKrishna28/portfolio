const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-background">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
    );
};

export default Background;
