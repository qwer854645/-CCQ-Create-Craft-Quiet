const $CustomPortalBuilder = Java.loadClass("net.kyrptonaught.customportalapi.api.CustomPortalBuilder");
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");

StartupEvents.postInit(event => {
    $CustomPortalBuilder
        .beginPortal()

        // 框架方块：使用 Block.getBlock 获取模组方块
        ["frameBlock(net.minecraft.world.level.block.Block)"](Block.getBlock('northstar:polished_moon_stone'))
        
        // 目标维度
        .destDimID("northstar:moon")
        
        // 传送门颜色
        .tintColor(193, 193, 193)
        
        // 激活物品：使用 Item.of 获取物品对象
        .lightWithItem(Item.of('northstar:lunar_sapphire_shard'))
        
        .registerPortal();


        $CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.world.level.block.Block)"](Block.getBlock('northstar:polished_mercury_stone'))
        .destDimID("northstar:mercury")
        .tintColor(242, 216, 255)
        .lightWithItem(Item.of('northstar:lunar_sapphire_shard'))
        .registerPortal();


        $CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.world.level.block.Block)"](Block.getBlock('northstar:polished_venus_stone'))
        .destDimID("northstar:venus")
        .tintColor(255, 208, 115)
        .lightWithItem(Item.of('northstar:lunar_sapphire_shard'))
        .registerPortal();


        $CustomPortalBuilder.beginPortal()
        ["frameBlock(net.minecraft.world.level.block.Block)"](Block.getBlock('northstar:polished_mars_stone'))
        .destDimID("northstar:mars")
        .tintColor(255, 161, 115)
        .lightWithItem(Item.of('northstar:lunar_sapphire_shard'))
        .registerPortal();
});