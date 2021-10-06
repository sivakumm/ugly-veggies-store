import { bench, runBenchmarks } from "../../../dev_dependencies.ts";
import { add } from "../../../src/application/usecases/addTwoNumbers.ts";

bench({
  name: "runs100forAdd",
  runs: 100,
  func(bench): void {
    bench.start();

    add(1, 2);

    bench.stop();
  },
});

runBenchmarks();
