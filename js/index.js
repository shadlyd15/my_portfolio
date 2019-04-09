var textarea = $('.term');
var speed = 50; //Writing speed in milliseconds
var text = 'sudo rm -rf /*';

var i = 0;

runner();

function runner() {
  textarea.append(text.charAt(i));
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
      else {
        textarea.append("<br>")
        i = 0;
        setTimeout(function() {feedbacker();}, 1000);
      }
    }, Math.floor(Math.random() * 220) + 50);
}

var count = 0;
var time = 1;
function feedbacker() {
  textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  if (time % 2 == 0) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  if (time == 3) {
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
    i++;
    textarea.append("[    " + count / 1000 + "] " + output[i] + "<br>");
  }
  window.scrollTo(0, document.body.scrollHeight);  
  i++;
  time = Math.floor(Math.random() * 4) + 1;
  count += time;
  setTimeout(
    function() {
      if (i < output.length - 2)
        feedbacker();
      else {
        textarea.append("<br>Initialising...<br>");
        setTimeout(function() {
          // $(".load").fadeOut(1000);
          $(".load").load( "content.html",function(){}).hide().fadeIn(2500);
        }, 500);
      }
    },time);
}


var output = ["CPU0 microcode updated early to revision 0x1b, date = 2014-05-29",
"Initializing cgroup subsys cpuset",
"Initializing cgroup subsys cpu",
"Initializing cgroup subsys cpuacct",
"KERNEL supported cpus:",
"  Intel GenuineIntel",
"  AMD AuthenticAMD",
"  Centaur CentaurHauls",
"e820: BIOS-provided physical RAM map:",
"BIOS-e820: [mem 0x0000000000000000-0x000000000009dfff] usable",
"BIOS-e820: [mem 0x000000000009e000-0x000000000009ffff] reserved",
"BIOS-e820: [mem 0x0000000000100000-0x000000001fffffff] usable",
"BIOS-e820: [mem 0x0000000020000000-0x00000000201fffff] reserved",
" gran_size: 1G   chunk_size: 2G  num_reg: 4    lose cover RAM: 942M",
" gran_size: 2G   chunk_size: 2G  num_reg: 3    lose cover RAM: 1966M",
"mtrr_cleanup: can not find optimal value",
"please specify mtrr_gran_size/mtrr_chunk_size",
"e820: update [mem 0xcbc00000-0xffffffff] usable ==> reserved",
"e820: last_pfn = 0xcb000 max_arch_pfn = 0x400000000",
"Scanning 1 areas for low memory corruption",
"Base memory trampoline at [ffff880000098000] 98000 size 24576",
"init_memory_mapping: [mem 0x00000000-0x000fffff]",
" [mem 0x00000000-0x000fffff] page 4k",
"BRK [0x01fe5000, 0x01fe5fff] PGTABLE",
"BRK [0x01fe6000, 0x01fe6fff] PGTABLE",
"BRK [0x01fe7000, 0x01fe7fff] PGTABLE",
"init_memory_mapping: [mem 0x42f000000-0x42f1fffff]",
" [mem 0x42f000000-0x42f1fffff] page 2M",
"BRK [0x01fe8000, 0x01fe8fff] PGTABLE",
"init_memory_mapping: [mem 0x420000000-0x42effffff]",
" [mem 0x420000000-0x42effffff] page 2M",
"init_memory_mapping: [mem 0x400000000-0x41fffffff]",
" [mem 0x400000000-0x41fffffff] page 2M",
"init_memory_mapping: [mem 0x00100000-0x1fffffff]",
" [mem 0x00100000-0x001fffff] page 4k",
" [mem 0x00200000-0x1fffffff] page 2M",
"init_memory_mapping: [mem 0x20200000-0x40003fff]",
" [mem 0x20200000-0x3fffffff] page 2M",
" [mem 0x40000000-0x40003fff] page 4k",
"BRK [0x01fe9000, 0x01fe9fff] PGTABLE",
"BRK [0x01fea000, 0x01feafff] PGTABLE",
"init_memory_mapping: [mem 0x40005000-0xc9746fff]",
" [mem 0x40005000-0x401fffff] page 4k",
" [mem 0x40200000-0xc95fffff] page 2M",
" [mem 0xc9600000-0xc9746fff] page 4k",
"init_memory_mapping: [mem 0xc9d4b000-0xc9d60fff]",
" [mem 0xc9d4b000-0xc9d60fff] page 4k",
"init_memory_mapping: [mem 0xc9d67000-0xc9d68fff]",
" [mem 0xc9d67000-0xc9d68fff] page 4k",
"init_memory_mapping: [mem 0xc9d73000-0xc9f06fff]",
" [mem 0xc9d73000-0xc9f06fff] page 4k",
"init_memory_mapping: [mem 0xc9f0b000-0xc9f53fff]",
" [mem 0xc9f0b000-0xc9f53fff] page 4k",
"init_memory_mapping: [mem 0xc9f7a000-0xc9f7cfff]",
" [mem 0xc9f7a000-0xc9f7cfff] page 4k",
"init_memory_mapping: [mem 0xc9f7f000-0xc9f95fff]",
" [mem 0xc9f7f000-0xc9f95fff] page 4k",
"init_memory_mapping: [mem 0xc9f9c000-0xc9fa3fff]",
" [mem 0xc9f9c000-0xc9fa3fff] page 4k",
"init_memory_mapping: [mem 0xc9fa5000-0xc9fb3fff]",
" [mem 0xc9fa5000-0xc9fb3fff] page 4k",
"init_memory_mapping: [mem 0xc9fb5000-0xc9fbffff]",
" [mem 0xc9fb5000-0xc9fbffff] page 4k",
"init_memory_mapping: [mem 0xc9fc5000-0xc9ff0fff]",
" [mem 0xc9fc5000-0xc9ff0fff] page 4k",
"init_memory_mapping: [mem 0xc9ff2000-0xca001fff]",
" [mem 0xc9ff2000-0xca001fff] page 4k",
"init_memory_mapping: [mem 0xca029000-0xca03cfff]",
" [mem 0xca029000-0xca03cfff] page 4k",
"init_memory_mapping: [mem 0xca03e000-0xca03efff]",
" [mem 0xca03e000-0xca03efff] page 4k",
"init_memory_mapping: [mem 0xca041000-0xca041fff]",
" [mem 0xca041000-0xca041fff] page 4k",
"init_memory_mapping: [mem 0xca047000-0xca05dfff]",
" [mem 0xca047000-0xca05dfff] page 4k",
"init_memory_mapping: [mem 0xca887000-0xca887fff]",
" [mem 0xca887000-0xca887fff] page 4k",
"init_memory_mapping: [mem 0xca8cb000-0xcacd7fff]",
" [mem 0xca8cb000-0xca9fffff] page 4k",
" [mem 0xcaa00000-0xcabfffff] page 2M",
" [mem 0xcac00000-0xcacd7fff] page 4k",
"init_memory_mapping: [mem 0xcaff4000-0xcaffffff]",
" [mem 0xcaff4000-0xcaffffff] page 4k",
"init_memory_mapping: [mem 0x100000000-0x3ffffffff]",
" [mem 0x100000000-0x3ffffffff] page 2M",
"RAMDISK: [mem 0x357f2000-0x36bf0fff]",
"ACPI: Early table checksum verification disabled",
"No NUMA configuration found",
"Faking a node at [mem 0x0000000000000000-0x000000042f1fffff]",
"NODE_DATA(0) allocated [mem 0x42f1e6000-0x42f1eafff]",
"Zone ranges:",
"  DMA      [mem 0x00001000-0x00ffffff]",
"  DMA32    [mem 0x01000000-0xffffffff]",
"  Normal   [mem 0x100000000-0x42f1fffff]",
"Movable zone start for each node",
"Early memory node ranges",
"  node   0: [mem 0x00001000-0x0009dfff]",
"  node   0: [mem 0x00100000-0x1fffffff]",
"  node   0: [mem 0x20200000-0x40003fff]",
"  node   0: [mem 0x40005000-0xc9746fff]",
"  node   0: [mem 0xc9d4b000-0xc9d60fff]",
"  node   0: [mem 0xc9d67000-0xc9d68fff]",
"  node   0: [mem 0xc9d73000-0xc9f06fff]",
"  node   0: [mem 0xc9f0b000-0xc9f53fff]",
"  node   0: [mem 0xc9f7a000-0xc9f7cfff]",
"  node   0: [mem 0xc9f7f000-0xc9f95fff]",
"  node   0: [mem 0xc9f9c000-0xc9fa3fff]",
"  node   0: [mem 0xc9fa5000-0xc9fb3fff]",
"  node   0: [mem 0xc9fb5000-0xc9fbffff]",
"  node   0: [mem 0xc9fc5000-0xc9ff0fff]",
"  node   0: [mem 0xc9ff2000-0xca001fff]",
"  node   0: [mem 0xca029000-0xca03cfff]",
"  node   0: [mem 0xca03e000-0xca03efff]",
"  node   0: [mem 0xca041000-0xca041fff]",
"  node   0: [mem 0xca047000-0xca05dfff]",
"  node   0: [mem 0xca887000-0xca887fff]",
"  node   0: [mem 0xca8cb000-0xcacd7fff]",
"  node   0: [mem 0xcaff4000-0xcaffffff]",
"  node   0: [mem 0x100000000-0x42f1fffff]",
"Initmem setup node 0 [mem 0x00001000-0x42f1fffff]",
"On node 0 totalpages: 4165015",
"  DMA zone: 64 pages used for memmap",
"  DMA zone: 24 pages reserved",
"  DMA zone: 3997 pages, LIFO batch:0",
"  DMA32 zone: 12848 pages used for memmap",
"  DMA32 zone: 822266 pages, LIFO batch:31",
"  Normal zone: 52168 pages used for memmap",
"  Normal zone: 3338752 pages, LIFO batch:31",
"Reserving Intel graphics stolen memory at 0xcbe00000-0xcfdfffff",
"ACPI: PM-Timer IO Port: 0x408",
"ACPI: Local APIC address 0xfee00000",
"ACPI: LAPIC (acpi_id[0x01] lapic_id[0x00] enabled)",
"ACPI: LAPIC (acpi_id[0x02] lapic_id[0x02] enabled)",
"ACPI: LAPIC (acpi_id[0x03] lapic_id[0x04] enabled)",
"ACPI: LAPIC (acpi_id[0x04] lapic_id[0x06] enabled)",
"ACPI: LAPIC (acpi_id[0x05] lapic_id[0x01] enabled)",
"ACPI: LAPIC (acpi_id[0x06] lapic_id[0x03] enabled)",
"ACPI: LAPIC (acpi_id[0x07] lapic_id[0x05] enabled)",
"ACPI: LAPIC (acpi_id[0x08] lapic_id[0x07] enabled)",
"ACPI: LAPIC_NMI (acpi_id[0xff] high edge lint[0x1])",
"ACPI: IOAPIC (id[0x02] address[0xfec00000] gsi_base[0])",
"IOAPIC[0]: apic_id 2, version 32, address 0xfec00000, GSI 0-23",
"ACPI: INT_SRC_OVR (bus 0 bus_irq 0 global_irq 2 dfl dfl)",
"ACPI: INT_SRC_OVR (bus 0 bus_irq 9 global_irq 9 high level)",
"ACPI: IRQ0 used by override.",
"ACPI: IRQ9 used by override.",
"Using ACPI (MADT) for SMP configuration information",
"ACPI: HPET id: 0x8086a701 base: 0xfed00000",
"smpboot: Allowing 8 CPUs, 0 hotplug CPUs",
"PM: Registered nosave memory: [mem 0x00000000-0x00000fff]",
"PM: Registered nosave memory: [mem 0x0009e000-0x0009ffff]",
"PM: Registered nosave memory: [mem 0xc9f54000-0xc9f5afff]",
"PM: Registered nosave memory: [mem 0xc9f5b000-0xc9f67fff]",
"PM: Registered nosave memory: [mem 0xc9f68000-0xc9f79fff]",
"PM: Registered nosave memory: [mem 0xc9f7d000-0xc9f7efff]",
"PM: Registered nosave memory: [mem 0xc9f96000-0xc9f9bfff]",
"PM: Registered nosave memory: [mem 0xfec01000-0xfecfffff]",
"PM: Registered nosave memory: [mem 0xfed00000-0xfed03fff]",
"PM: Registered nosave memory: [mem 0xfed04000-0xfed1bfff]",
"PM: Registered nosave memory: [mem 0xfed1c000-0xfed1ffff]",
"PM: Registered nosave memory: [mem 0xfed20000-0xfedfffff]",
"PM: Registered nosave memory: [mem 0xfee00000-0xfee00fff]",
"PM: Registered nosave memory: [mem 0xfee01000-0xfeffffff]",
"PM: Registered nosave memory: [mem 0xff000000-0xffffffff]",
"e820: [mem 0xcfe00000-0xf7ffffff] available for PCI devices",
"Booting paravirtualized kernel on bare hardware",
"setup_percpu: NR_CPUS:256 nr_cpumask_bits:256 nr_cpu_ids:8 nr_node_ids:1",
"PERCPU: Embedded 31 pages/cpu @ffff88042ee00000 s87040 r8192 d31744 u262144",
"SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=8, Nodes=1",
"Hierarchical RCU implementation.",
" RCU dyntick-idle grace-period acceleration is enabled.",
" RCU restricting CPUs from NR_CPUS=256 to nr_cpu_ids=8.",
"RCU: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=8",
"NR_IRQS:16640 nr_irqs:488 16",
" Offload RCU callbacks from all CPUs",
" Offload RCU callbacks from CPUs: 0-7.",
"vt handoff: transparent VT on vt#7",
"Console: colour dummy device 80x25",
"console [tty0] enabled",
"hpet clockevent registered",
"tsc: Fast TSC calibration using PIT",
"tsc: Detected 2394.543 MHz processor",
"pid_max: default: 32768 minimum: 301",
"ACPI: Core revision 20141107",
"ACPI: All ACPI Tables successfully acquired",
"Security Framework initialized",
"AppArmor: AppArmor initialized",
"Yama: becoming mindful.",
"Dentry cache hash table entries: 2097152 (order: 12, 16777216 bytes)",
"Inode-cache hash table entries: 1048576 (order: 11, 8388608 bytes)",
"Mount-cache hash table entries: 32768 (order: 6, 262144 bytes)",
"Mountpoint-cache hash table entries: 32768 (order: 6, 262144 bytes)",
"Initializing cgroup subsys memory",
"Initializing cgroup subsys devices",
"Initializing cgroup subsys freezer",
"Initializing cgroup subsys net_cls",
"Initializing cgroup subsys blkio",
"Initializing cgroup subsys perf_event",
"Initializing cgroup subsys net_prio",
"pci_bus 0000:00: root bus resource [mem 0x000a0000-0x000bffff]",
"pci_bus 0000:00: root bus resource [mem 0x000c0000-0x000c3fff]",
"pci_bus 0000:00: root bus resource [mem 0x000c4000-0x000c7fff]",
"pci_bus 0000:00: root bus resource [mem 0x000c8000-0x000cbfff]",
"pci_bus 0000:00: root bus resource [mem 0x000cc000-0x000cffff]",
"pci_bus 0000:00: root bus resource [mem 0x000d0000-0x000d3fff]",
"pci_bus 0000:00: root bus resource [mem 0x000d4000-0x000d7fff]",
"pci_bus 0000:00: root bus resource [mem 0x000d8000-0x000dbfff]",
"pci_bus 0000:00: root bus resource [mem 0x000dc000-0x000dffff]",
"pci_bus 0000:00: root bus resource [mem 0xcfe00000-0xfeafffff]",
"pci 0000:00:00.0: [8086:0154] type 00 class 0x060000",
"pci 0000:00:01.0: [8086:0151] type 01 class 0x060400",
"pci 0000:00:01.0: PME# supported from D0 D3hot D3cold",
"pci 0000:00:01.0: System wakeup disabled by ACPI",
"pci 0000:00:02.0: [8086:0166] type 00 class 0x030000",
"pci 0000:00:02.0: reg 0x10: [mem 0xf7400000-0xf77fffff 64bit]",
"pci 0000:00:02.0: reg 0x18: [mem 0xd0000000-0xdfffffff 64bit pref]",
"pci 0000:00:02.0: reg 0x20: [io  0xf000-0xf03f]",
"pci 0000:00:14.0: [8086:1e31] type 00 class 0x0c0330",
"pci 0000:00:14.0: reg 0x10: [mem 0xf7a00000-0xf7a0ffff 64bit]",
"pci 0000:00:14.0: PME# supported from D3hot D3cold",
"pci 0000:00:14.0: System wakeup disabled by ACPI",
"pci 0000:00:16.0: [8086:1e3a] type 00 class 0x078000",
"pci 0000:00:16.0: reg 0x10: [mem 0xf7a1a000-0xf7a1a00f 64bit]",
"pci 0000:00:16.0: PME# supported from D0 D3hot D3cold",
"pci 0000:00:1a.0: [8086:1e2d] type 00 class 0x0c0320",
"pci 0000:00:1a.0: reg 0x10: [mem 0xf7a18000-0xf7a183ff]",
"pci 0000:00:1a.0: PME# supported from D0 D3hot D3cold",
"pci 0000:00:1a.0: System wakeup disabled by ACPI",
"pci 0000:00:1b.0: [8086:1e20] type 00 class 0x040300",
"pci 0000:00:1b.0: reg 0x10: [mem 0xf7a10000-0xf7a13fff 64bit]",
"pci 0000:00:1b.0: PME# supported from D0 D3hot D3cold",
"pci 0000:00:1b.0: System wakeup disabled by ACPI",
"pci 0000:00:1c.0: [8086:1e10] type 01 class 0x060400",
"pci 0000:00:1c.0: PME# supported from D0 D3hot D3cold",
"pci 0000:00:1c.1: [8086:1e12] type 01 class 0x060400",
"pci 0000:00:1c.1: PME# supported from D0 D3hot D3cold",
"pci 0000:00:1c.3: [8086:1e16] type 01 class 0x060400",
"pci 0000:00:1c.3: PME# supported from D0 D3hot D3cold",
"pci 0000:00:1c.3: System wakeup disabled by ACPI",
"pci 0000:00:1d.0: [8086:1e26] type 00 class 0x0c0320",
"pci 0000:00:1d.0: reg 0x10: [mem 0xf7a17000-0xf7a173ff]",
"pci 0000:00:1d.0: PME# supported from D0 D3hot D3cold",
"pci 0000:00:1d.0: System wakeup disabled by ACPI",
"pci 0000:00:1f.0: [8086:1e59] type 00 class 0x060100",
"pci 0000:00:1f.2: [8086:1e03] type 00 class 0x010601",
"pci 0000:00:1f.2: reg 0x10: [io  0xf0b0-0xf0b7]",
"pci 0000:00:1f.2: reg 0x14: [io  0xf0a0-0xf0a3]",
"pci 0000:00:1f.2: reg 0x18: [io  0xf090-0xf097]",
"pci 0000:00:1f.2: reg 0x1c: [io  0xf080-0xf083]",
"pci 0000:00:1f.2: reg 0x20: [io  0xf060-0xf07f]",
"pci 0000:00:1f.2: reg 0x24: [mem 0xf7a16000-0xf7a167ff]",
"pci 0000:00:1f.2: PME# supported from D3hot",
"pci 0000:00:1f.3: [8086:1e22] type 00 class 0x0c0500",
"pci 0000:00:1f.3: reg 0x10: [mem 0xf7a15000-0xf7a150ff 64bit]",
"pci 0000:00:1f.3: reg 0x20: [io  0xf040-0xf05f]",
"pci 0000:01:00.0: [10de:0fd1] type 00 class 0x030000",
"pci 0000:01:00.0: reg 0x10: [mem 0xf6000000-0xf6ffffff]",
"pci 0000:01:00.0: reg 0x14: [mem 0xe0000000-0xefffffff 64bit pref]",
"pci 0000:01:00.0: reg 0x1c: [mem 0xf0000000-0xf1ffffff 64bit pref]",
"pci 0000:01:00.0: reg 0x24: [io  0xe000-0xe07f]",
"pci 0000:01:00.0: reg 0x30: [mem 0xf7000000-0xf707ffff pref]",
"pci 0000:00:1c.0: PCI bridge to [bus 02]",
"pci 0000:03:00.0: [8086:0887] type 00 class 0x028000",
"pci 0000:03:00.0: reg 0x10: [mem 0xf7900000-0xf7901fff 64bit]",
"pci 0000:03:00.0: PME# supported from D0 D3hot D3cold",
"pci 0000:03:00.0: System wakeup disabled by ACPI",
"pci 0000:00:1c.1: PCI bridge to [bus 03]",
"pci 0000:00:1c.1:   bridge window [mem 0xf7900000-0xf79fffff]",
"pci 0000:04:00.0: [1969:1091] type 00 class 0x020000",
"pci 0000:04:00.0: reg 0x10: [mem 0xf7800000-0xf783ffff 64bit]",
"pci 0000:04:00.0: reg 0x18: [io  0xd000-0xd07f]",
"pci 0000:04:00.0: PME# supported from D0 D1 D2 D3hot D3cold",
"pci 0000:04:00.0: System wakeup disabled by ACPI",
"pci 0000:00:1c.3: PCI bridge to [bus 04]",
"vgaarb: loaded",
"vgaarb: bridge control possible 0000:01:00.0",
"vgaarb: no bridge control possible 0000:00:02.0",
"SCSI subsystem initialized",
"libata version 3.00 loaded.",
"ACPI: bus type USB registered",
"usbcore: registered new interface driver usbfs",
"usbcore: registered new interface driver hub",
"usbcore: registered new device driver usb",
"PCI: Using ACPI for IRQ routing",
"PCI: pci_cache_line_size set to 64 bytes",
"e820: reserve RAM buffer [mem 0x0009e000-0x0009ffff]",
"e820: reserve RAM buffer [mem 0x40004000-0x43ffffff]",
"e820: reserve RAM buffer [mem 0xc9747000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9d61000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9d69000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9f07000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9f54000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9f7d000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9f96000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9fa4000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9fb4000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9fc0000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xc9ff1000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca002000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca03d000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca03f000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca042000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca05e000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xca888000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xcacd8000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0xcb000000-0xcbffffff]",
"e820: reserve RAM buffer [mem 0x42f200000-0x42fffffff]",
"NetLabel: Initializing",
"NetLabel:  domain hash size = 128",
"NetLabel:  protocols = UNLABELED CIPSOv4",
"NetLabel:  unlabeled traffic allowed by default",
"hpet0: at MMIO 0xfed00000, IRQs 2, 8, 0, 0, 0, 0, 0, 0",
"hpet0: 8 comparators, 64-bit 14.318180 MHz counter",
"Switched to clocksource hpet",
"AppArmor: AppArmor Filesystem Enabled",
"pnp: PnP ACPI init",
"system 00:00: [mem 0xfed40000-0xfed44fff] has been reserved",
"system 00:00: Plug and Play ACPI device, IDs PNP0c01 (active)",
"system 00:01: [io  0x0680-0x069f] has been reserved",
"system 00:01: [io  0x1000-0x100f] has been reserved",
"system 00:01: [io  0xffff] has been reserved",
"system 00:01: [io  0xffff] has been reserved",
"system 00:01: [io  0x0400-0x0453] could not be reserved",
"system 00:01: [io  0x0458-0x047f] has been reserved",
"system 00:01: [io  0x0500-0x057f] has been reserved",
"system 00:01: [io  0x164e-0x164f] has been reserved",
"system 00:01: Plug and Play ACPI device, IDs PNP0c02 (active)",
"pnp 00:02: Plug and Play ACPI device, IDs PNP0b00 (active)",
"system 00:03: [io  0x0454-0x0457] has been reserved",
"system 00:03: Plug and Play ACPI device, IDs INT3f0d PNP0c02 (active)",
"system 00:04: [io  0x04d0-0x04d1] has been reserved",
"system 00:04: Plug and Play ACPI device, IDs PNP0c02 (active)",
"pnp 00:06: Plug and Play ACPI device, IDs ATK3001 PNP030b (active)",
"system 00:07: [mem 0xfed1c000-0xfed1ffff] has been reserved",
"system 00:07: [mem 0xfed10000-0xfed17fff] has been reserved",
"system 00:07: [mem 0xfed18000-0xfed18fff] has been reserved",
"system 00:07: [mem 0xfed19000-0xfed19fff] has been reserved",
"system 00:07: [mem 0xf8000000-0xfbffffff] has been reserved",
"system 00:07: [mem 0xfed20000-0xfed3ffff] has been reserved",
"system 00:07: [mem 0xfed90000-0xfed93fff] has been reserved",
"system 00:07: [mem 0xfed45000-0xfed8ffff] has been reserved",
"system 00:07: [mem 0xff000000-0xffffffff] has been reserved",
"system 00:07: [mem 0xfee00000-0xfeefffff] could not be reserved",
"system 00:07: [mem 0xcfe00000-0xcfe00fff] has been reserved",
"system 00:07: Plug and Play ACPI device, IDs PNP0c02 (active)",
"system 00:08: [mem 0xcfe00000-0xcfe00fff] has been reserved",
"system 00:08: Plug and Play ACPI device, IDs PNP0c02 (active)",
"system 00:09: [mem 0x20000000-0x201fffff] has been reserved",
"system 00:09: [mem 0x40004000-0x40004fff] has been reserved",
"system 00:09: Plug and Play ACPI device, IDs PNP0c01 (active)",
"pnp: PnP ACPI: found 10 devices",
"pci 0000:00:01.0: PCI bridge to [bus 01]",
"pci 0000:00:01.0:   bridge window [io  0xe000-0xefff]",
"pci 0000:00:01.0:   bridge window [mem 0xf6000000-0xf70fffff]",
"pci 0000:00:01.0:   bridge window [mem 0xe0000000-0xf1ffffff 64bit pref]",
"pci 0000:00:1c.0: PCI bridge to [bus 02]",
"pci 0000:00:1c.1: PCI bridge to [bus 03]",
"pci 0000:00:1c.1:   bridge window [mem 0xf7900000-0xf79fffff]",
"pci 0000:00:1c.3: PCI bridge to [bus 04]",
"pci 0000:00:1c.3:   bridge window [io  0xd000-0xdfff]",
"pci 0000:00:1c.3:   bridge window [mem 0xf7800000-0xf78fffff]",
"pci_bus 0000:00: resource 4 [io  0x0000-0x0cf7]",
"pci_bus 0000:00: resource 5 [io  0x0d00-0xffff]",
"pci_bus 0000:00: resource 6 [mem 0x000a0000-0x000bffff]",
"pci_bus 0000:00: resource 7 [mem 0x000c0000-0x000c3fff]",
"pci_bus 0000:00: resource 8 [mem 0x000c4000-0x000c7fff]",
"pci_bus 0000:00: resource 9 [mem 0x000c8000-0x000cbfff]",
"pci_bus 0000:00: resource 10 [mem 0x000cc000-0x000cffff]",
"pci_bus 0000:00: resource 11 [mem 0x000d0000-0x000d3fff]",
"pci_bus 0000:00: resource 12 [mem 0x000d4000-0x000d7fff]",
"pci_bus 0000:00: resource 13 [mem 0x000d8000-0x000dbfff]",
"pci_bus 0000:00: resource 14 [mem 0x000dc000-0x000dffff]",
"pci_bus 0000:00: resource 15 [mem 0xcfe00000-0xfeafffff]",
"pci_bus 0000:01: resource 0 [io  0xe000-0xefff]",
"pci_bus 0000:01: resource 1 [mem 0xf6000000-0xf70fffff]",
"pci_bus 0000:01: resource 2 [mem 0xe0000000-0xf1ffffff 64bit pref]",
"pci_bus 0000:03: resource 1 [mem 0xf7900000-0xf79fffff]",
"pci_bus 0000:04: resource 0 [io  0xd000-0xdfff]",
"pci_bus 0000:04: resource 1 [mem 0xf7800000-0xf78fffff]",
"NET: Registered protocol family 2",
"TCP established hash table entries: 131072 (order: 8, 1048576 bytes)",
"TCP bind hash table entries: 65536 (order: 8, 1048576 bytes)",
"TCP: Hash tables configured (established 131072 bind 65536)",
"TCP: reno registered",
"UDP hash table entries: 8192 (order: 6, 262144 bytes)",
"UDP-Lite hash table entries: 8192 (order: 6, 262144 bytes)",
"NET: Registered protocol family 1",
"pci 0000:00:02.0: Video device with shadowed ROM",
"pci 0000:04:00.0: set MSI_INTX_DISABLE_BUG flag",
"hub 1-0:1.0: USB hub found",
"hub 1-0:1.0: 4 ports detected",
"xhci_hcd 0000:00:14.0: xHCI Host Controller",
"xhci_hcd 0000:00:14.0: new USB bus registered, assigned bus number 2",
"usb usb2: New USB device found, idVendor=1d6b, idProduct=0003",
"usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1",
"usb usb2: Product: xHCI Host Controller",
"usb usb2: Manufacturer: Linux 3.19.0-21-generic xhci-hcd",
"usb usb2: SerialNumber: 0000:00:14.0",
"hub 2-0:1.0: USB hub found",
"hub 2-0:1.0: 4 ports detected",
"ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver",
"ehci-pci: EHCI PCI platform driver",
"ehci-pci 0000:00:1a.0: EHCI Host Controller",
"ehci-pci 0000:00:1a.0: new USB bus registered, assigned bus number 3",
"ehci-pci 0000:00:1a.0: debug port 2",
"ehci-pci 0000:00:1a.0: cache line size of 64 is not supported",
"ehci-pci 0000:00:1a.0: irq 16, io mem 0xf7a18000",
"ehci-pci 0000:00:1a.0: USB 2.0 started, EHCI 1.00",
"usb usb3: New USB device found, idVendor=1d6b, idProduct=0002",
"usb usb3: New USB device strings: Mfr=3, Product=2, SerialNumber=1",
"usb usb3: Product: EHCI Host Controller",
"usb usb3: Manufacturer: Linux 3.19.0-21-generic ehci_hcd",
"usb usb3: SerialNumber: 0000:00:1a.0",
"hub 3-0:1.0: USB hub found",
"hub 3-0:1.0: 2 ports detected",
"ehci-pci 0000:00:1d.0: EHCI Host Controller",
"ehci-pci 0000:00:1d.0: new USB bus registered, assigned bus number 4",
"ehci-pci 0000:00:1d.0: debug port 2",
"ehci-pci 0000:00:1d.0: cache line size of 64 is not supported",
"ehci-pci 0000:00:1d.0: irq 23, io mem 0xf7a17000",
"ehci-pci 0000:00:1d.0: USB 2.0 started, EHCI 1.00",
"usb usb4: New USB device found, idVendor=1d6b, idProduct=0002",
"usb usb4: New USB device strings: Mfr=3, Product=2, SerialNumber=1",
"usb usb4: Product: EHCI Host Controller",
"usb usb4: Manufacturer: Linux 3.19.0-21-generic ehci_hcd",
"usb usb4: SerialNumber: 0000:00:1d.0",
"hub 4-0:1.0: USB hub found",
"hub 4-0:1.0: 2 ports detected",
"ehci-platform: EHCI generic platform driver",
"ohci_hcd: USB 1.1 'Open' Host Controller (OHCI) Driver",
"ohci-pci: OHCI PCI platform driver",
"ohci-platform: OHCI generic platform driver",
"uhci_hcd: USB Universal Host Controller Interface driver",
"i8042: PNP: PS/2 Controller [PNP030b:PS2K,PNP0f03:PS2M] at 0x60,0x64 irq 1,12",
"i8042: Detected active multiplexing controller, rev 1.1",
"serio: i8042 KBD port at 0x60,0x64 irq 1",
"serio: i8042 AUX0 port at 0x60,0x64 irq 12",
"serio: i8042 AUX1 port at 0x60,0x64 irq 12",
"serio: i8042 AUX2 port at 0x60,0x64 irq 12",
"serio: i8042 AUX3 port at 0x60,0x64 irq 12",
"mousedev: PS/2 mouse device common for all mice",
"rtc_cmos 00:02: RTC can wake from S4",
"rtc_cmos 00:02: rtc core: registered rtc_cmos as rtc0",
"rtc_cmos 00:02: alarms up to one month, y3k, 242 bytes nvram, hpet irqs",
"i2c /dev entries driver",
"device-mapper: uevent: version 1.0.3",
"Bluetooth: BNEP (Ethernet Emulation) ver 1.3",
"Bluetooth: BNEP filters: protocol multicast",
"Bluetooth: BNEP socket layer initialized",
"Bluetooth: RFCOMM TTY layer initialized",
"Bluetooth: RFCOMM socket layer initialized",
"Bluetooth: RFCOMM ver 1.11",
"iwlwifi 0000:03:00.0: L1 Enabled - LTR Disabled",
"iwlwifi 0000:03:00.0: Radio type=0x2-0x0-0x0",
"iwlwifi 0000:03:00.0: L1 Enabled - LTR Disabled",
"iwlwifi 0000:03:00.0: Radio type=0x2-0x0-0x0",
"wlan0: authenticate with 00:90:cc:ea:f4:16",
"wlan0: send auth to 00:90:cc:ea:f4:16 (try 1/3)",
"wlan0: authenticated",
"iwlwifi 0000:03:00.0 wlan0: disabling HT/VHT due to WEP/TKIP use",
"iwlwifi 0000:03:00.0 wlan0: disabling HT as WMM/QoS is not supported by the AP",
"iwlwifi 0000:03:00.0 wlan0: disabling VHT as WMM/QoS is not supported by the AP",
"wlan0: associate with 00:90:cc:ea:f4:16 (try 1/3)",
"wlan0: RX AssocResp from 00:90:cc:ea:f4:16 (capab=0x431 status=0 aid=3)",
"wlan0: associated",
"vboxdrv: Found 8 processor cores.",
"vboxdrv: fAsync=0 offMin=0x165 offMax=0x24ab",
"vboxdrv: TSC mode is 'synchronous', kernel timer mode is 'normal'.",
"vboxdrv: Successfully loaded version 4.3.26_Ubuntu (interface 0x001a000a).",
"vboxpci: IOMMU not found (not registered)",
"ip_tables: (C) 2000-2006 Netfilter Core Team",
"ip6_tables: (C) 2000-2006 Netfilter Core Team",
"Ebtables v2.0 registered",
"device virbr0-nic entered promiscuous mode",
"nf_conntrack version 0.5.0 (16384 buckets, 65536 max)",
"virbr0: port 1(virbr0-nic) entered listening state",
"virbr0: port 1(virbr0-nic) entered listening state",
"virbr0: port 1(virbr0-nic) entered disabled state",
"Initialising...", ""];