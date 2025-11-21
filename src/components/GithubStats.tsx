import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

const GithubStats = () => {
    return (
        <section id="github-stats" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        GitHub <span className="text-accent">Contributions</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
                    <p className="mt-6 text-center max-w-2xl text-muted-foreground">
                        My coding activity and contributions over the last year.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="glass p-8 rounded-2xl border border-white/5 flex justify-center items-center overflow-x-auto"
                >
                    <GitHubCalendar
                        username="JPKrishna28"
                        colorScheme="dark"
                        blockSize={15}
                        blockMargin={5}
                        fontSize={16}
                        theme={{
                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default GithubStats;
