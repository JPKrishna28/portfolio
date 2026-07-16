import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

const GithubStats = () => {
    return (
        <section id="github-stats" className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4 }}
                    className="mb-14"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
                        GitHub Contributions
                    </h2>
                    <p className="text-muted-foreground">
                        My coding activity over the last year.
                    </p>
                </motion.div>

                <div className="bg-card border border-border rounded-lg p-6 md:p-8 flex justify-center items-center overflow-x-auto">
                    <GitHubCalendar
                        username="JPKrishna28"
                        blockSize={12}
                        blockMargin={4}
                        fontSize={14}
                    />
                </div>
            </div>
        </section>
    );
};

export default GithubStats;
