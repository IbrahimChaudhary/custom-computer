import Motherboard from "@/schemas/server/motherboard-server-schema";
import PowerSupply from "@/schemas/server/power-supply-server-schema";
import connectdb from "./connectdb";
import Case from "@/schemas/server/case-server-schema";
import CPUCooler from "@/schemas/server/cpu-cooler-server-schema";
import NetworkCard from "@/schemas/server/network-card-server-schema";
import Memory from "@/schemas/server/memory-server-schema";
import Cpu from "@/schemas/server/cpu-server-schema";
import Fan from "@/schemas/server/fans-server-schema";
import GraphicsCard from "@/schemas/server/graphics-card-server-schema";
import Storage from "@/schemas/server/storage-server-schema";

export default async function giveAllParts(page: number = 1) {
  try {
    console.log("giveAllParts called");
    const limit = 1;
    const skip = (page - 1) * limit;
    await connectdb();
    let cases = await Case.find({}).skip(skip).limit(limit);
    let cpuCoolers = await CPUCooler.find({}).skip(skip).limit(limit);
    let networkCards = await NetworkCard.find({}).skip(skip).limit(limit);
    let motherboards = await Motherboard.find({}).skip(skip).limit(limit);
    let powerSupplies = await PowerSupply.find({}).skip(skip).limit(limit);
    let memorys = await Memory.find({}).skip(skip).limit(limit);
    let cpus = await Cpu.find({}).skip(skip).limit(limit);
    let fans = await Fan.find({}).skip(skip).limit(limit);
    let graphicsCards = await GraphicsCard.find({}).skip(skip).limit(limit);
    let storages = await Storage.find({}).skip(skip).limit(limit);

    // Add 'type' property to each document
    cases = cases.map((doc) => ({ ...doc.toObject(), category: "case" }));

    cpuCoolers = cpuCoolers.map((doc) => ({
      ...doc.toObject(),
      category: "cpu-cooler",
    }));

    networkCards = networkCards.map((doc) => ({
      ...doc.toObject(),
      category: "network-card",
    }));

    powerSupplies = powerSupplies.map((doc) => ({
      ...doc.toObject(),
      category: "power-supply",
    }));
    motherboards = motherboards.map((doc) => ({
      ...doc.toObject(),
      category: "motherboard",
    }));
    memorys = memorys.map((doc) => ({
      ...doc.toObject(),
      category: "memory",
    }));
    cpus = cpus.map((doc) => ({
      ...doc.toObject(),
      category: "Cpu",
    }));
    fans = fans.map((doc) => ({
      ...doc.toObject(),
      category: "fans",
    }));
    graphicsCards = graphicsCards.map((doc) => ({
      ...doc.toObject(),
      category: "graphics-card",
    }));
    storages = storages.map((doc) => ({
      ...doc.toObject(),
      category: "storage",
    }));

    let res = [
      ...cases,
      ...cpuCoolers,
      ...networkCards,
      ...powerSupplies,
      ...motherboards,
      ...memorys,
      ...cpus,
      ...fans,
      ...graphicsCards,
      ...storages,
    ];

    // Fisher-Yates (Knuth) shuffle algorithm
    for (let i = res.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [res[i], res[j]] = [res[j], res[i]];
    }

    return res;
  } catch (error) {
    console.log("error in finding parts", error);
  }
}
