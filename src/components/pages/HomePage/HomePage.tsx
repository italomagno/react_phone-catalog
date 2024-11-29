/* eslint-disable max-len */
import { HeroSection } from '../../sections/HeroSection/HeroSection';
import { SectionComponent } from '../../sections/SectionComponent';
import { Card } from '../../shared/Card';
import { CategoryCard } from '../../shared/CategoryCard';
import { Layout } from '../../shared/Layout';

export function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <SectionComponent
        sectionTitle={'Brand new models'}
        variant="withControllers"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </SectionComponent>
      <SectionComponent sectionTitle="Shop by category" variant="default">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </SectionComponent>
      <SectionComponent sectionTitle="Hot prices" variant="withControllers">
        <Card />
        <Card />
        <Card />
        <Card />
      </SectionComponent>
    </Layout>
  );
}
