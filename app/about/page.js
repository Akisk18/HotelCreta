import {
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-center">
        <h1 className="mb-6 text-2xl md:text-4xl font-bold text-[#348adb]">
          Welcome to Hotel Creta!
        </h1>
      </div>
      <div className="flex xl:flex-row flex-col w-[95%] justify-center ml-8 p-2 gap-5 ">
        <div className="flex flex-col gap-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            accumsan, diam a mollis finibus, massa arcu iaculis lectus, eget
            cursus sapien magna ac ipsum. Suspendisse et mi et elit mollis
            lacinia. Ut auctor iaculis elit, sed pretium orci elementum in.
            Morbi ultricies massa eu urna sollicitudin, ac lacinia lacus
            maximus. Suspendisse vitae mauris bibendum, posuere dolor ac,
            tristique neque. Suspendisse imperdiet tincidunt est nec
            ullamcorper. Donec tincidunt lorem eget rhoncus scelerisque. Sed
            dignissim urna at pellentesque volutpat. Aenean nunc massa, porta
            quis magna sit amet, vestibulum gravida elit.
          </p>
          <p>
            Praesent ac diam quis sapien dapibus pretium sed vel quam. In
            elementum suscipit consectetur. Aenean condimentum, odio in congue
            euismod, dui urna laoreet dolor, fermentum rhoncus tortor nunc
            dictum magna. Aliquam venenatis mattis metus id rutrum. Pellentesque
            eu cursus turpis, id suscipit elit. Sed non diam non ante porttitor
            egestas. Quisque convallis sollicitudin neque at placerat. Curabitur
            quis velit maximus, aliquet mi egestas, convallis massa.
          </p>
          <p>
            Sed nec libero ullamcorper, fermentum est sit amet, congue lacus.
            Pellentesque dolor arcu, lobortis et felis non, suscipit bibendum
            tellus. Nullam a mauris quis nunc luctus sollicitudin in id ex. Nam
            iaculis ante congue est congue tempus. Praesent ac elit porttitor,
            consectetur odio nec, ornare arcu. Vestibulum semper tellus mollis,
            tristique nisl sed, dapibus lacus. Aenean consequat turpis massa,
            quis finibus ex mollis in. Pellentesque id nisl id mi efficitur
            euismod ac rhoncus magna. Donec scelerisque, quam non vulputate
            consequat, orci est dignissim ipsum, non vehicula lacus dolor vitae
            lorem. Morbi hendrerit lectus id sapien convallis, eget finibus
            ipsum eleifend. Donec ut massa id nunc auctor mollis at vel lorem.
            Nunc quis metus dapibus, sollicitudin leo ac, egestas risus. Aenean
            fermentum porttitor mauris, non tempus diam cursus at.
          </p>
        </div>
        <Image
          src="/about1.jpg"
          width={800}
          height={800}
          alt=""
          className="xl:w-[50%] md:w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <h2 className="mb-6 text-2xl md:text-4xl font-bold text-[#348adb]">
          Experience extreme relaxation!
        </h2>
      </div>
      <div className="flex xl:flex-row flex-col w-[95%] justify-center ml-8 p-2 gap-10 ">
        <Image
          src="/about2.jpg"
          width={800}
          height={800}
          alt=""
          className="xl:w-[50%] md:w-full rounded-lg shadow-lg"
        />
        <div className="flex flex-col gap-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            accumsan, diam a mollis finibus, massa arcu iaculis lectus, eget
            cursus sapien magna ac ipsum. Suspendisse et mi et elit mollis
            lacinia. Ut auctor iaculis elit, sed pretium orci elementum in.
            Morbi ultricies massa eu urna sollicitudin, ac lacinia lacus
            maximus. Suspendisse vitae mauris bibendum, posuere dolor ac,
            tristique neque. Suspendisse imperdiet tincidunt est nec
            ullamcorper. Donec tincidunt lorem eget rhoncus scelerisque. Sed
            dignissim urna at pellentesque volutpat. Aenean nunc massa, porta
            quis magna sit amet, vestibulum gravida elit.
          </p>
          <p>
            Proin at tempus tortor. Suspendisse scelerisque ipsum non lectus
            pulvinar, sit amet luctus purus semper. Nulla posuere dolor non
            tellus fermentum, vel auctor felis fringilla. Fusce id felis nibh.
            Pellentesque at tellus nisi. Maecenas vel lacus dapibus lectus
            tristique rutrum nec at ipsum. Sed nec nisi facilisis, ultricies
            velit luctus, interdum sapien. Vestibulum egestas condimentum odio,
            in viverra felis tincidunt a. Etiam nec elit in lectus feugiat
            feugiat vitae at velit.
          </p>
          <p>
            Sed nec libero ullamcorper, fermentum est sit amet, congue lacus.
            Pellentesque dolor arcu, lobortis et felis non, suscipit bibendum
            tellus. Nullam a mauris quis nunc luctus sollicitudin in id ex. Nam
            iaculis ante congue est congue tempus. Praesent ac elit porttitor,
            consectetur odio nec, ornare arcu. Vestibulum semper tellus mollis,
            tristique nisl sed, dapibus lacus. Aenean consequat turpis massa,
            quis finibus ex mollis in. Pellentesque id nisl id mi efficitur
            euismod ac rhoncus magna. Donec scelerisque, quam non vulputate
            consequat, orci est dignissim ipsum, non vehicula lacus dolor vitae
            lorem. Morbi hendrerit lectus id sapien convallis, eget finibus
            ipsum eleifend. Donec ut massa id nunc auctor mollis at vel lorem.
            Nunc quis metus dapibus, sollicitudin leo ac, egestas risus. Aenean
            fermentum porttitor mauris, non tempus diam cursus at.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <h2 className="mb-6 text-2xl md:text-4xl font-bold text-[#348adb]">
          View amazing tropical scenery!
        </h2>
      </div>
      <div className="flex xl:flex-row flex-col w-[95%] justify-center ml-8 p-2 gap-5 ">
        <div className="flex flex-col gap-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            accumsan, diam a mollis finibus, massa arcu iaculis lectus, eget
            cursus sapien magna ac ipsum. Suspendisse et mi et elit mollis
            lacinia. Ut auctor iaculis elit, sed pretium orci elementum in.
            Morbi ultricies massa eu urna sollicitudin, ac lacinia lacus
            maximus. Suspendisse vitae mauris bibendum, posuere dolor ac,
            tristique neque. Suspendisse imperdiet tincidunt est nec
            ullamcorper. Donec tincidunt lorem eget rhoncus scelerisque. Sed
            dignissim urna at pellentesque volutpat. Aenean nunc massa, porta
            quis magna sit amet, vestibulum gravida elit.
          </p>
          <p>
            Praesent ac diam quis sapien dapibus pretium sed vel quam. In
            elementum suscipit consectetur. Aenean condimentum, odio in congue
            euismod, dui urna laoreet dolor, fermentum rhoncus tortor nunc
            dictum magna. Aliquam venenatis mattis metus id rutrum. Pellentesque
            eu cursus turpis, id suscipit elit. Sed non diam non ante porttitor
            egestas. Quisque convallis sollicitudin neque at placerat. Curabitur
            quis velit maximus, aliquet mi egestas, convallis massa.
          </p>
          <p>
            Sed nec libero ullamcorper, fermentum est sit amet, congue lacus.
            Pellentesque dolor arcu, lobortis et felis non, suscipit bibendum
            tellus. Nullam a mauris quis nunc luctus sollicitudin in id ex. Nam
            iaculis ante congue est congue tempus. Praesent ac elit porttitor,
            consectetur odio nec, ornare arcu. Vestibulum semper tellus mollis,
            tristique nisl sed, dapibus lacus. Aenean consequat turpis massa,
            quis finibus ex mollis in. Pellentesque id nisl id mi efficitur
            euismod ac rhoncus magna. Donec scelerisque, quam non vulputate
            consequat, orci est dignissim ipsum, non vehicula lacus dolor vitae
            lorem. Morbi hendrerit lectus id sapien convallis, eget finibus
            ipsum eleifend. Donec ut massa id nunc auctor mollis at vel lorem.
            Nunc quis metus dapibus, sollicitudin leo ac, egestas risus. Aenean
            fermentum porttitor mauris, non tempus diam cursus at.
          </p>
        </div>
        <Image
          src="/about3.jpg"
          width={800}
          height={800}
          alt=""
          className="xl:w-[50%] md:w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="flex items-center justify-center mt-10 ">
        <h2 className="mb-6 text-2xl md:text-4xl font-bold text-[#348adb]">
          Have a question? Contact us!
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center">
        <PhoneIcon className="w-10 h-10 text-[#34495e]" />
        <span className="font-semibold text-xl">+ 123-456-790-789</span>
      </div>
      <div className="flex flex-row justify-center items-center mt-3 ">
        <EnvelopeIcon className="w-10 h-10 text-[#34495e]" />
        <span className="font-semibold text-xl">hotelcreta@test.com</span>
      </div>
      <div className="flex flex-row justify-center items-center mt-3 mb-10 ">
        <MapPinIcon className="w-10 h-10 text-[#34495e]" />
        <span className="font-semibold text-xl">Tropical Island, Island</span>
      </div>
    </div>
  );
}
