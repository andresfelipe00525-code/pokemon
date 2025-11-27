import type { ReactNode } from 'react';

interface PageContainerProps {
	children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
	return <div className="max-w-6xl mx-auto p-6 space-y-6">{children}</div>;
};

export default PageContainer;
