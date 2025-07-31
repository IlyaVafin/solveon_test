import { getServiceById } from '@/entities/service/api/getServiceById';
import Image from 'next/image';

const ServicePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const service = await getServiceById(id);
  console.log(service);

  return (
    <section>
      <Image priority src={service.photo.url} alt="" width={200} height={200} />
      <p>{service.photo.title}</p>
    </section>
  );
};

export default ServicePage;
