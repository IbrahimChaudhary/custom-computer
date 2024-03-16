import CaseForm from "@/components/forms/case-form";
import CpuCoolerForm from "@/components/forms/cpu-cooler-form";
import CpuForm from "@/components/forms/cpu-form";
import FansForm from "@/components/forms/fans-form";
import GraphicsCardForm from "@/components/forms/graphics-card-form";
import MemoryForm from "@/components/forms/memory-form";
import MotherboardForm from "@/components/forms/motherboard-form";
import NetworkCardForm from "@/components/forms/network-card-form";
import PowerSupplyForm from "@/components/forms/power-supply-form";
import StorageForm from "@/components/forms/storage-form";
import NoAdminFormSelected from "@/components/no-admin-form-selected";
export default function giveAdminAddPartForm(
  selectedValue: string
): JSX.Element {
  switch (selectedValue) {
    case "case":
      return <CaseForm />;
    case "cpu":
      return <CpuForm />;
    case "cpu-cooler":
      return <CpuCoolerForm />;
    case "memory":
      return <MemoryForm />;
    case "motherboard":
      return <MotherboardForm />;
    case "graphics-card":
      return <GraphicsCardForm />;
    case "fans":
      return <FansForm />;
    case "storage":
      return <StorageForm />;
    case "power-supply":
      return <PowerSupplyForm />;
    case "network-card":
      return <NetworkCardForm />;
  }
  return <NoAdminFormSelected />;
}
