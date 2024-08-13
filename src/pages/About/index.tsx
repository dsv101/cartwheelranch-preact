import { FunctionalComponent } from 'preact';
import cow00 from '@assets/cow-00.jpg'
import cows00 from '@assets/cows-00.jpg'
import goat00 from '@assets/goat-00.jpg'
import pig00 from '@assets/pig-00.jpg'
import { Nav } from '@components/nav';

const Card: FunctionalComponent<{
    dir: 'rtl' | 'ltr';
    imgSrc: string;
    headingText: string;
    paragraphs: string[];
    source: string | null;
}> = ({
    dir,
    imgSrc,
    headingText,
    paragraphs,
    source,
}) => {
    return (
        <div class="flex-rows flex-columns-when-small">
            <img src={imgSrc} class='polaroid pic' style="width: 33vh; height: 33vh; max-width: 250px; max-height: 250px; align-self: center;" />
            <div class="flex-columns">
                <h2>{headingText}</h2>
                {paragraphs.map((text) => (<p>{text}</p>))}
                {source && <a href={source}>Learn More</a>}
            </div>
        </div>
    );
};

export const About: FunctionalComponent<{}> = () => {
    return (
        <div class="flex-columns" style="width: 95vw; text-align: left;">
            <Nav></Nav>
            <div style="text-align: center">
                <h1>About Cartwheel Ranch</h1>
            </div>
            <div class="flex-rows flex-columns-when-small" style="justify-content: center; align-items: center">
                <span>Better than organic</span>
                <span class="hidden-when-small">|</span>
                <span>Pasture raised</span>
                <span class="hidden-when-small">|</span>
                <span>No hormones</span>
                <span class="hidden-when-small">|</span>
                <span>No vaccines</span>
            </div>
            <Card
                dir='ltr'
                headingText='Black Angus Beef'
                imgSrc={cows00}
                paragraphs={[
                    'Polled beef cattle, for many years known as Aberdeen Angus, originating in northeastern Scotland. The characteristic features of the breed are black colour, polled head, compact and low-set body, fine quality of flesh, and high dressing percentage. The Angus is a beef breed of the highest rank, and for years purebred or crossbred Angus steers have held high places of honor at the leading fat-stock shows in Great Britain and the United States. This breed was introduced into the United States in 1873, and after that date its influence spread widely there and in other countries.',
                ]}
                source='https://www.britannica.com/animal/Angus-breed-of-cattle'
            />
            <Card
                dir='ltr'
                headingText='Berkshire Pork'
                imgSrc={pig00}
                paragraphs={[
                    'Breed of domestic pig originating in England, where in the early 19th century the name "Berkshire" became synonymous with improved pig strains of differing origin and type. Hogs imported from East Asia figured prominently in the improvement of varieties native to the region.',
                ]}
                source='https://www.britannica.com/animal/Berkshire-pig'
            />
            <Card
                dir='ltr'
                headingText='LaMancha Goat'
                imgSrc={goat00}
                paragraphs={[
                    'American breed of dairy goat known for its much-reduced external ears. The breed was developed in the early 20th century on the West Coast of the United States from unusually short-eared goats believed to be descended from goats brought to California by Spanish missionaries. Those goats were bred to several other breeds, including Nubians and Alpines, until a distinctive American LaMancha breed was developed.',
                ]}
                source='https://www.britannica.com/animal/LaMancha'
            />
        </div>
    );
};
