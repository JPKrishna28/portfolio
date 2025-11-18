import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-background">
            {/* Animated gradient blobs - minimalistic colors */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-slate-600 dark:bg-slate-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-10 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-slate-500 dark:bg-slate-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-600 dark:bg-slate-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 dark:opacity-10 animate-blob animation-delay-4000"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
        </div>
    );
};

export default Background;
